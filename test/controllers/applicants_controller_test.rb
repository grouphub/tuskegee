require 'test_helper'

class ApplicantsControllerTest < ActionController::TestCase
  setup do
    @applicant = applicants(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:applicants)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create applicant" do
    assert_difference('Applicant.count') do
      post :create, applicant: { address_1: @applicant.address_1, address_2: @applicant.address_2, city: @applicant.city, date_of_birth: @applicant.date_of_birth, first_name: @applicant.first_name, gender: @applicant.gender, group: @applicant.group, group_id: @applicant.group_id, home_phone: @applicant.home_phone, last_name: @applicant.last_name, middle_name: @applicant.middle_name, ssn: @applicant.ssn, state: @applicant.state, string: @applicant.string, zip: @applicant.zip }
    end

    assert_redirected_to applicant_path(assigns(:applicant))
  end

  test "should show applicant" do
    get :show, id: @applicant
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @applicant
    assert_response :success
  end

  test "should update applicant" do
    patch :update, id: @applicant, applicant: { address_1: @applicant.address_1, address_2: @applicant.address_2, city: @applicant.city, date_of_birth: @applicant.date_of_birth, first_name: @applicant.first_name, gender: @applicant.gender, group: @applicant.group, group_id: @applicant.group_id, home_phone: @applicant.home_phone, last_name: @applicant.last_name, middle_name: @applicant.middle_name, ssn: @applicant.ssn, state: @applicant.state, string: @applicant.string, zip: @applicant.zip }
    assert_redirected_to applicant_path(assigns(:applicant))
  end

  test "should destroy applicant" do
    assert_difference('Applicant.count', -1) do
      delete :destroy, id: @applicant
    end

    assert_redirected_to applicants_path
  end
end
