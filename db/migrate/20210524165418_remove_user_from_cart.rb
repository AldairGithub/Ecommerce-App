class RemoveUserFromCart < ActiveRecord::Migration[6.0]
  def change
    remove_reference :users, :cart, foreign_key:true
  end
end
