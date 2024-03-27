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

Contact.create!(
  name: 'John Doe',
  email: 'johndoe@example.com'
)

Home.create!(
  title: 'Welcome to My Portfolio',
  description: 'This is my portfolio site, where you can learn more about me and my projects.'
)

Project.create!(
  title: 'Social Media Platform',
  description: 'A social media platform built with Ruby on Rails and React. Users can create accounts, post messages, and follow other users.',
  skill: 'Ruby on Rails, React',
  date: '2023-01-01'
)

Project.create!(
  title: 'E-commerce Site',
  description: 'An e-commerce site built with Ruby on Rails and JavaScript. Users can browse products, add them to a cart, and check out.',
  skill: 'Ruby on Rails, JavaScript',
  date: '2022-12-01'
)

Project.create!(
  title: 'Blogging Platform',
  description: 'A blogging platform built with Ruby on Rails. Users can create accounts, write posts, and comment on other users posts.',
  skill: 'Ruby on Rails',
  date: '2022-11-01'
)
