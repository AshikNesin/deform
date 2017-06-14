const express = require("express");
const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// dotenv.config();

const { sendEmail } = require("send-email");

const {
	FORMIFY_FROM,
	FORMIFY_SENT_TO,
	FORMIFY_SUBJECT,
	FORMIFY_REDIRECT_URL
} = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // parse application/json

app.post("/", (req, res) => {
	let payload = {
		to: FORMIFY_SENT_TO,
		subject: FORMIFY_SUBJECT,
		html: "",
		from: FORMIFY_FROM // optional
	};

	let htmlEmail = "";
	Object.keys(req.body).map(item => {
		htmlEmail += `<p><b>${item}</b> - ${req.body[item]}</p>`;
	});
	payload.html = htmlEmail;
	sendEmail(payload)
		.then(response => {
			res.redirect(FORMIFY_REDIRECT_URL);
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		});
});

const port = process.env.PORT || 9999;
app.listen(port, () => {
	console.info("Listening on port", port);
});
