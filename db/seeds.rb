# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Item.destroy_all
User.destroy_all

@admin = User.create(username: 'admin', email: 'admin@email.com', address: '123 Street 45-67', password: 'aldair')
@user = User.create(username: 'user', email: 'user@email.com', address: '987 Dr. 65-43', password: 'aldair')
@moser = User.create(username: 'moser', email: 'moser@email.com', address: '123 Dr. 654-12', password: 'aldair')
puts "#{User.count} users created"

@spaceship_poster = Item.create(name: 'Spaceship Poster', price: 10, img_url: 'https://i.imgur.com/PnUuUtU.jpg', quantity: 1, user: @admin)
@guitar = Item.create(name: 'Guitar', price: 150, img_url: 'https://i.imgur.com/lh59qZH.jpg', quantity: 1, user: @admin)
@flowers = Item.create(name: 'Flowers', price: 20, img_url: 'https://i.imgur.com/huSgzp2.jpg', quantity: 1, user: @admin)

@accoustic_guitar = Item.create(name: 'Accoustic Guitar', price: 100, img_url: 'https://i.imgur.com/qilptGI.jpg', quantity: 1, user: @user)
@egg_decorations = Item.create(name: 'Egg Decorations', price: 10, img_url: 'https://i.imgur.com/TQw5NJl.jpg', quantity: 1, user: @user)
@dices = Item.create(name: 'Dices', price: 1, img_url: 'https://i.imgur.com/ywoFPVE.jpg' , quantity: 1, user: @user)

@wave_poster = Item.create(name: 'Wave Poster', price: 10, img_url: 'https://i.imgur.com/XhE2N3q.jpg', quantity: 1, user: @moser)
@ibanez = Item.create(name: 'Ibanez SA360QM', price: 400, img_url: 'https://i.imgur.com/WeN545k.jpg', quantity: 1, user: @moser)
@wrist_watch = Item.create(name: 'Wrist Watch', price: 1000, img_url: 'https://i.imgur.com/qDvVHCv.jpg', quantity: 1, user: @moser)
puts "#{Item.count} items created"

@music = Category.create(name: 'Music')
@decoration = Category.create(name: 'Decoration')
@style = Category.create(name: 'Style')
@outwear = Category.create(name: 'Outwear')
@nature = Category.create(name: 'Nature')
@entertainment = Category.create(name: 'Entertainment')
@future = Category.create(name: 'Future')
puts "#{Category.count} categories created"


@spaceship_poster.categories.push(@decoration, @future)
@guitar.categories.push(@music)
@flowers.categories.push(@decoration, @nature)

@accoustic_guitar.categories.push(@music)
@egg_decorations.categories.push(@decoration)
@dices.categories.push(@entertainment)

@wave_poster.categories.push(@nature, @decoration)
@ibanez.categories.push(@music, @entertainment)
@wrist_watch.categories.push(@outwear)
