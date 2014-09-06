json.array!(@users) do |user|
  json.extract! user, :id, :username, :email, :first_name, :last_name, :passwrod, :password_confirmation
  json.url user_url(user, format: :json)
end
