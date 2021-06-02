class User < ApplicationRecord
  has_secure_password

  has_many :items, dependent: :destroy
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :address, presence: { allow_blank: true, allow_nil: true}
  validates :password, presence: true, length: { minimum: 6}

end
