const resolvers = {
  tracksForHome: (_, __, { dataSources }) => {
    return dataSources.trackAPI.getTracksForHome();
  },
  spaceCats: (_, __, { dataSources }) => {
    return dataSources.spaceCatsAPI.getSpaceCats();
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
export default resolvers;
