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
@beta = User.create(username: 'beta', email: 'beta@email.com', address: '123 Rd', password: 'aldair')
@sam = User.create(username: 'sam', email: 'same@email.com', address: '343 Street', password: 'aldair')
@love = User.create(username: 'love', email: 'love@email.com', address: '453 Avenue', password: 'aldair')
@al = User.create(username: 'al', email: 'al@email.com', address: '4523 Road ', password: 'aldair')
@zm = User.create(username: 'zm', email: 'zm@email.com', address: '433 Ave', password: 'aldair')
puts "#{User.count} users created"

@sofa_one = Item.create(name: 'Orange Sofa', price: 500, img_url: 'https://i.imgur.com/iYfQ3Av.jpg', quantity: 25, user: @admin)
# Photo by Martin Péchy from Pexels
@sofa_two = Item.create(name: 'Gray Sofa', price: 600, img_url: 'https://i.imgur.com/SCAi8L5.jpg', quantity: 50, user: @user)
# Photo by Lisa Fotios from Pexels
@sofa_three = Item.create(name: 'White Sofa', price: 1000, img_url: 'https://i.imgur.com/Gikjq9W.jpg', quantity: 200, user: @user)
# Photo by Andrea Piacquadio from Pexels
@sofa_four = Item.create(name: 'Black Sofa', price: 600, img_url: 'https://i.imgur.com/ERWWV3F.jpg', quantity: 100, user: @admin)
# Photo by Pixabay from Pexels
@sofa_five = Item.create(name: 'Reading Sofa', price: 200, img_url: 'https://i.imgur.com/Eu658PM.jpg', quantity: 50, user: @admin)
# Photo by Pixabay from Pexels
@sofa_six = Item.create(name: 'Solo Sofa', price: 300, img_url: 'https://i.imgur.com/cHS0wtQ.jpg', quantity: 43, user: @admin)
# Photo by Mikhail Nilov from Pexels
@sofa_seven = Item.create(name: 'Green Sofa', price: 800, img_url: 'https://i.imgur.com/Y2GgRp6.jpg', quantity: 16, user: @user)
# Photo by Rachel Claire from Pexels

@guitar_one = Item.create(name: 'Classical Guitar', price: 60, img_url: 'https://i.imgur.com/x1xMvgm.jpg', quantity: 6, user: @beta)
# Photo by Philip Boakye from Pexels
@bass_one = Item.create(name: 'Electric Brown Bass', price: 60, img_url: 'https://i.imgur.com/6HqSTaE.jpg', quantity: 50, user: @sam)
# Photo by Pixabay from Pexels
@guitar_two = Item.create(name: 'Acoustic Guitar', price: 80, img_url: 'https://i.imgur.com/Ae7E6LS.jpg', quantity: 25, user: @beta)
# Photo by Kelvin França from Pexels
@guitar_three = Item.create(name: 'Brown Acoustic Guitar', price: 80, img_url: 'https://i.imgur.com/Hyqzy4k.jpg', quantity: 50, user: @love)
# Photo by Viktor Mogilat from Pexels
@guitar_four = Item.create(name: 'White Electric Guitar', price: 120, img_url: 'https://i.imgur.com/zErXUam.jpg', quantity: 56, user: @love)
# Photo by Isaac Weatherly from Pexels
@drums_one = Item.create(name: 'Wood Drum Set', price: 100, img_url: 'https://i.imgur.com/d5er2R6.jpg', quantity: 50, user: @sam)
# Photo by cottonbro from Pexels
@drums_two = Item.create(name: 'Electric Drum Set', price: 200, img_url: 'https://i.imgur.com/oGAIfjI.jpg', quantity: 23, user: @sam)
# Photo by cottonbro from Pexels

@hat_one = Item.create(name: 'Straw Hat', price: 30, img_url: 'https://i.imgur.com/Tss9k9x.jpg', quantity: 30, user: @sam)
# Photo by Jude Stevens from Pexels
@hat_two = Item.create(name: 'Orange Striped Hat', price: 20, img_url: 'https://i.imgur.com/zQPHqnR.jpg', quantity: 100, user: @al)
# Photo by Artem Beliaikin from Pexels
@hat_three = Item.create(name: 'Yellow Hat', price: 25, img_url: 'https://i.imgur.com/sRW3x3x.jpg', quantity: 25, user: @al)
# Photo by Anna Shvets from Pexels
@hat_four = Item.create(name: 'LA Cap', price: 30, img_url: 'https://i.imgur.com/tdqZiJa.jpg', quantity: 100, user: @love)
# Photo by Jens Mahnke from Pexels
@hat_five = Item.create(name: 'Desert Cap', price: 25, img_url: 'https://i.imgur.com/5O8Br1a.jpg', quantity: 50, user: @al)
# Photo by Joshua T from Pexels
@hat_six = Item.create(name: 'Pink Hat', price: 30, img_url: 'https://i.imgur.com/pLx40V9.jpg', quantity: 30, user: @al)
# Photo by Pixabay from Pexels

@table_one = Item.create(name: 'Table with Glass of Milk', price: 30, img_url: 'https://i.imgur.com/V2EVDfW.jpg', quantity: 500, user: @zm)
# Photo by Juan Pablo Serrano Arenas from Pexels
@table_two = Item.create(name: 'Table with metal chair', price: 50, img_url: 'https://i.imgur.com/HBTl3Ug.jpg', quantity: 200, user: @zm)
# Photo by Scott Webb from Pexels
@table_three = Item.create(name: 'Wood Table with two chairs', price: 50, img_url: 'https://i.imgur.com/TuYOz5m.jpg', quantity: 100, user: @admin)
# Photo by Blank Space from Pexels
@table_four = Item.create(name: 'Table with Comfy chair', price: 40, img_url: 'https://i.imgur.com/Pu6UV9e.jpg', quantity: 30, user: @al)
# Photo by Pixabay from Pexels
@table_five = Item.create(name: 'Outside table set for Garden', price: 150, img_url: 'https://i.imgur.com/vgkD1zE.jpg', quantity: 500, user: @zm)
# Photo by Engin Akyurt from Pexels
@table_six = Item.create(name: 'Rectangular table with two white Chairs', price: 100, img_url: 'https://i.imgur.com/4dXc9uZ.jpg', quantity: 300, user: @al)
# Photo by Pixabay from Pexels

@spaceship_poster = Item.create(name: 'Spaceship Poster', price: 10, img_url: 'https://i.imgur.com/PnUuUtU.jpg', quantity: 1, user: @admin)
@guitar = Item.create(name: 'Guitar', price: 150, img_url: 'https://i.imgur.com/lh59qZH.jpg', quantity: 1, user: @admin)
@flowers = Item.create(name: 'Flowers', price: 20, img_url: 'https://i.imgur.com/huSgzp2.jpg', quantity: 1, user: @admin)

@accoustic_guitar = Item.create(name: 'Accoustic Guitar', price: 100, img_url: 'https://i.imgur.com/qilptGI.jpg', quantity: 1, user: @user)
@egg_decorations = Item.create(name: 'Egg Decorations', price: 10, img_url: 'https://i.imgur.com/TQw5NJl.jpg', quantity: 1, user: @user)
@dices = Item.create(name: 'Dice', price: 1, img_url: 'https://i.imgur.com/ywoFPVE.jpg' , quantity: 1, user: @user)

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
@furniture = Category.create(name: 'Furniture')
@table = Category.create(name: 'Table')
puts "#{Category.count} categories created"

@sofa_one.categories.push(@furniture)
@sofa_two.categories.push(@furniture)
@sofa_three.categories.push(@furniture)
@sofa_four.categories.push(@furniture)
@sofa_five.categories.push(@furniture)
@sofa_six.categories.push(@furniture)
@sofa_seven.categories.push(@furniture)

@guitar_one.categories.push(@music)
@guitar_two.categories.push(@music)
@guitar_three.categories.push(@music)
@guitar_four.categories.push(@music)
@bass_one.categories.push(@music)
@drums_one.categories.push(@music)
@drums_two.categories.push(@music)

@hat_one.categories.push(@style)
@hat_two.categories.push(@style)
@hat_three.categories.push(@style)
@hat_four.categories.push(@style)
@hat_five.categories.push(@style)
@hat_six.categories.push(@style)

@table_one.categories.push(@furniture, @table)
@table_two.categories.push(@furniture, @table)
@table_three.categories.push(@furniture, @table)
@table_four.categories.push(@furniture, @table)
@table_five.categories.push(@furniture, @table)
@table_six.categories.push(@furniture, @table)

@spaceship_poster.categories.push(@decoration)
@guitar.categories.push(@music)
@flowers.categories.push(@decoration)

@accoustic_guitar.categories.push(@music)
@egg_decorations.categories.push(@decoration)
@dices.categories.push(@entertainment)

@wave_poster.categories.push(@decoration)
@ibanez.categories.push(@music)
@wrist_watch.categories.push(@outwear)
