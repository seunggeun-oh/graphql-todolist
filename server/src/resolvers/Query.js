module.exports = {
  totalLists: (parent, args, { db }) => db.collection('lists').estimatedDocumentCount(),
  allLists: (parent, args, { db }) => db.collection('lists').find().toArray(),
};