import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_style('white')

column_names = ['user_id', 'item_id', 'rating', 'timestamp']
df = pd.read_csv(r'C:\Users\CSMG0903\Desktop\u.data', sep='\t', names=column_names)

print(df.head(10))

movie_titles = pd.read_csv(r"C:\Users\CSMG0903\Desktop\Movie_Id_Titles.csv")
print(movie_titles.head())


df = pd.merge(df, movie_titles, on='item_id')
print(df.head(10))

ratings = df.groupby('title')['rating'].mean()
top_rated_movies = ratings.sort_values(ascending=False).head()
print(top_rated_movies)

ratings_df = pd.DataFrame(ratings)
ratings_df['num of ratings'] = df.groupby('title')['rating'].count()

print(ratings_df.head())

plt.figure(figsize=(10, 4))
ratings_df['num of ratings'].hist(bins=70)
plt.show()

sns.jointplot(x='rating', y='num of ratings', data=ratings_df, alpha=0.5)
plt.show()

moviemat = df.pivot_table(index='user_id', columns='title', values='rating')
print(moviemat.head())

print(ratings_df.sort_values('num of ratings', ascending=False).head(10))

starwars_user_ratings = moviemat['Star Wars (1977)']
liarliar_user_ratings = moviemat['Liar Liar (1997)']

print(starwars_user_ratings.head())
print(liarliar_user_ratings.head())

similar_to_starwars = moviemat.corrwith(starwars_user_ratings)
similar_to_liarliar = moviemat.corrwith(liarliar_user_ratings)

corr_starwars = pd.DataFrame(similar_to_starwars, columns=['Correlation'])
corr_starwars.dropna(inplace=True)
print(corr_starwars.sort_values('Correlation', ascending=False).head(10))

corr_starwars = corr_starwars.join(ratings_df['num of ratings'])
print(corr_starwars.head())

filtered_starwars = corr_starwars[corr_starwars['num of ratings'] > 100].sort_values('Correlation', ascending=False).head(10)
print(filtered_starwars)

corr_liarliar = pd.DataFrame(similar_to_liarliar, columns=['Correlation'])
corr_liarliar.dropna(inplace=True)
corr_liarliar = corr_liarliar.join(ratings_df['num of ratings'])

filtered_liarliar = corr_liarliar[corr_liarliar['num of ratings'] > 100].sort_values('Correlation', ascending=False).head(10)
print(filtered_liarliar)

res = np.array(filtered_liarliar)
print(res)
