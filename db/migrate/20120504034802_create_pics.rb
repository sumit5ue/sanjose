class CreatePics < ActiveRecord::Migration
  def change
    create_table :pics do |t|
      t.has_attached_file :avatar
      t.timestamps
      t.text :parent_key
      t.integer :deal_id
    end
    connection.execute("ALTER TABLE pics ADD FOREIGN KEY (deal_id) REFERENCES deals (id)")
  end
end
