console.log("bot is starting");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

// birthdayBot

var stream = T.stream('user');


stream.on('user_event', tweetEvent);

function tweetEvent(eventMsg) {


	

	var phrase5 = new Array("termikasih sudah berpartisipasi!", "tanggal yang bagus!", "avatar kamu keren!", "username kamu bagus!", "keren kan?");
	var rand5 = Math.floor(Math.random()*4);
	var ans = phrase5[rand5];


	var que_id = eventMsg.target_object.quoted_status_id;
	var fro = eventMsg.source.screen_name;
	var psn = eventMsg.text;
	var day = eventMsg.source.created_at;
	


	if (que_id === 823615682151530500) {
		// if (n == true) {
		// 	 var pesan = "akun anda dibuat pada: "
		// 	 var jwb = "@"+fro + " " + pesan + " " + day; 
		// 	 tweetIt(jwb);
		//       console.log('I tweeted the message');
		// } else {
		// 	var salah = "@"+fro + " maaf silahkan gunakan #mybirthdaybot untuk mengetahui kapan akun anda dibuat";
		// 	tweetIt(salah);

		// }
		 var pesan = fro + " dibuat pada: ";
		 var jwb = "@"+fro + " Hi!" + " " + pesan + " " + "[ " + day + " ]" + " btw, " + ans; 
		 tweetIt(jwb);
	}


}





function tweetIt(txt) {
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("Something wrong");
		} else {
			console.log("its work");
		}
	}
}