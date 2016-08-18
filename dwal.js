// synthetic distributed write ahead log
var channels = {};

function create(name, partitions, replicas) {
	channels[name] = {
		numPartitions: partitions || 1,
		numReplicas: replicas || 1,
		subscribers: [],
		sub: function(partition) {

		},
		pub: function(partition, key, value) {

		},
	};
	return channels[name];
}

exports = {
	channels: channels,
	create: create,
};
