(function() {
	// Initialize Firebase
	var config = {
		apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
		authDomain: "XXXXXXXXXXXX.firebaseapp.com",
		databaseURL: "https://XXXXXXXXXXXX.firebaseio.com",
		projectId: "XXXXXXXXXXXX",
		storageBucket: "XXXXXXXXXXXX.appspot.com",
		messagingSenderId: "XXXXXXXXXX"
	};
	firebase.initializeApp(config);

	angular
		.module('app', ['firebase'])
		.controller('MyCtrl', function($firebaseObject) {
			const rootRef = firebase.database().ref().child('angular');
			const ref = rootRef.child('object');
			this.object = $firebaseObject(ref);
		});
}());
