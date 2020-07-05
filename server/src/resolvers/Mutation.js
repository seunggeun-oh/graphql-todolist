module.exports = {
  postPhoto: (parent, args, { db }) => {
    const newList = {
      ...args.input,
      status: "New",
    }

    db.collection('lists').insert(newList);
  },
};