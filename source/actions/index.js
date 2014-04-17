var config = require('../../config');
var db = require('../db')(config);

var initial = 'created';

function sendWelcomeEmail(e, callback) {
	db.actions.save({
		id: 'send-welcome',
		user: e.user,
		state: initial,
	}, callback);
}

function sendNotifyFollowersCollectionCreated(e, callback) {
	db.actions.save({
		id: 'send-notify-followers-collection-created',
		user: e.user,
		collection: e.data.collection,
		state: initial,
	}, callback);
}

function sendNotifyOwnerCollectionFollowed(e, callback) {
	db.actions.save({
		id: 'send-notify-owner-collection-followed',
		user: e.user,
		follower: e.data.follower,
		collection: e.data.collection,
		state: initial
	}, callback);
}

function sendNotifyFollowersNewItemAdded(e, callback) {
	db.actions.save({
		id: 'send-notify-followers-new-item-added',
		user: e.user,
		collection: e.data.collection,
		item: e.data.item,
		state: initial
	}, callback);
}

module.exports = {
	sendWelcomeEmail: sendWelcomeEmail,
	sendNotifyFollowersCollectionCreated: sendNotifyFollowersCollectionCreated,
	sendNotifyOwnerCollectionFollowed: sendNotifyOwnerCollectionFollowed,
	sendNotifyFollowersNewItemAdded: sendNotifyFollowersNewItemAdded
};