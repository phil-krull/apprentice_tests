class User < ActiveRecord::Base
  has_many :todos
  has_secure_password
  validates_presence_of :first_name, :last_name, :email, :presence => true
  email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, :uniqueness => {case_sensitive: false}, :format => {:with => email_regex}
end
