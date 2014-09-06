json.array!(@applicants) do |applicant|
  json.extract! applicant, :id, :first_name, :middle_name, :last_name, :ssn, :group, :group_id, :address_1, :string, :address_2, :city, :state, :zip, :home_phone, :date_of_birth, :gender
  json.url applicant_url(applicant, format: :json)
end
