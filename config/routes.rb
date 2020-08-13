Rails.application.routes.draw do
  resources :categories, only: :index
  resources :items
  resources :users
  get '/items/:id/categories', to: 'items#item_categories'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # adds a category based on the category_id
  # put '/categories/:category_id/item/:id', to: 'items#add_category'

  get '/users/:id/items', to: 'users#user_items'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
