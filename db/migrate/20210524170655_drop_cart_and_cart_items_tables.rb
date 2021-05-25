class DropCartAndCartItemsTables < ActiveRecord::Migration[6.0]
  def change
    drop_table :carts
    drop_table :cart_items
  end
end
