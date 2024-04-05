# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# db/seeds.rb

About.create!(
  title: 'About Me',
  description: 'I am a software developer with a passion for building web applications. I have experience with Ruby on Rails, JavaScript, and React.',
  skill: 'Ruby on Rails, JavaScript, React',
  experience: 'I have worked on several projects, including a social media platform, an e-commerce site, and a blogging platform.'
)

# Project.create!(
#   title: 'Social Media Platform',
#   description: 'A social media platform built with Ruby on Rails and React.
#   Users can create accounts, post messages, and follow other users.
#   browse products, add them to a cart, and check out.',
#   skill: 'Ruby on Rails, Javascript',
#   date: '2023-01-01',
#   github_link: 'https://github.com/constance-lsf',
#   # web_link: 'https://social-media-platform.herokuapp.com'
# )

Project.create!(
  title: 'Social Media Platform',
  description: 'A social media built with Ruby on Rails and JavaScript, in a team of 4.
  Users can create accounts, add cultural events, post reviews about their last activity, saved some activities with a bookmark and follow other users.',
  skill: 'Ruby on Rails, JavaScript',
  date: '04-03-2024 - 2 weeks',
  github_link: 'https://github.com/achillllllllle/tois'
)

Project.create!(
  title: 'Airbnb Clone',
  description: 'A platform built with Ruby on Rails and Javascript in a team of 4.
  Users can create accounts, add their own activities called "wonders", and book some wonders.',
  skill: 'Ruby on Rails, JavaScript',
  date: '26-02-2024 - 1 week',
  github_link: 'https://github.com/achillllllllle/unbelievably'
)
