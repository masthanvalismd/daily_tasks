db.movie.remove({'rating':8.6})  to remove all the movies with rating 8.6



db.movie.update({'name':'Jai Bhim'},{$set:{'rating':9}})   to update the rating of Jai Bhim to 9