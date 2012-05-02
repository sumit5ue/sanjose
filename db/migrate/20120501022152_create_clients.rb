class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :username
      t.string :password
      t.string :name
      t.text :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.timestamps
    end
  end
end
