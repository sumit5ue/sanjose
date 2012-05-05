# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120504034802) do

  create_table "clients", :force => true do |t|
    t.string   "username"
    t.string   "password"
    t.string   "name"
    t.text     "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "country"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "deals", :force => true do |t|
    t.string   "title"
    t.string   "description"
    t.string   "image"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer  "client_id"
  end

  add_index "deals", ["client_id"], :name => "client_id"

  create_table "pics", :force => true do |t|
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
    t.text     "parent_key"
    t.integer  "deal_id"
  end

  add_index "pics", ["deal_id"], :name => "deal_id"

end
