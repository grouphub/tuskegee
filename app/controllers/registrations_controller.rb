class RegistrationsController < ApplicationController
  # before_action :set_registration, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!
  # GET /registrations
  # GET /registrations.json
  def index
    @registrations = Registration.all
    @applicationTitle = "Application Validated"

    render layout: false
  end

  # GET /registrations/1
  # GET /registrations/1.json
  def show
  end

  # GET /registrations/new
  def new
    @registration = Registration.new
  end

  # GET /registrations/1/edit
  def edit
  end

  # POST /registrations
  # POST /registrations.json
  def create
    
    pd = PokitDok::PokitDok.new("RKH2S5iecrOcrGroqrx9", "1eEx7fl95Deqz0Y9w3StPfMT8oXoRS8XR4oU2xLH")

    @enrollment = {
        action: "Change", 
        dependents: [], 
        master_policy_number: "ABCD012354", 
        payer: {
            tax_id: "654456654"
        }, 
        purpose: "Original", 
        reference_number: "12456", 
        sponsor: {
            tax_id: "999888777"
        }, 
        subscriber: {
            address: {
                city: "CAMP HILL", 
                county: "CUMBERLAND", 
                line: "100 MARKET ST", 
                line2: "APT 3G", 
                postal_code: "17011", 
                state: "PA"
            }, 
            benefit_status: "Active", 
            benefits: [
                {
                    begin_date: "Sat Jun  1 00:00:00 1996", 
                    benefit_type: "Health", 
                    coordination_of_benefits: [
                        {
                            group_or_policy_number: "890111", 
                            payer_responsibility: "Primary", 
                            status: "Unknown"
                        }
                    ], 
                    late_enrollment: false, 
                    maintenance_type: "Addition"
                }, 
                {
                    begin_date: "Sat Jun  1 00:00:00 1996", 
                    benefit_type: "Dental", 
                    late_enrollment: false, 
                    maintenance_type: "Addition"
                }, 
                {
                    begin_date: "Sat Jun  1 00:00:00 1996", 
                    benefit_type: "Vision", 
                    late_enrollment: false, 
                    maintenance_type: "Addition"
                }
            ], 
            birth_date: "Fri Aug 16 00:00:00 1940", 
            contacts: [
                {
                    communication_number2: "7172341240", 
                    communication_type2: "Work Phone Number", 
                    primary_communication_number: "7172343334", 
                    primary_communication_type: "Home Phone Number"
                }
            ], 
            eligibility_begin_date: "Thu May 23 00:00:00 1996", 
            employment_status: "Full-time", 
            first_name: "JOHN", 
            gender: "Male", 
            group_or_policy_number: "123456001", 
            handicapped: false, 
            last_name: "DOE", 
            maintenance_reason: "Active", 
            maintenance_type: "Addition", 
            member_id: "123456789", 
            middle_name: "P", 
            relationship: "Self", 
            ssn: "123456789", 
            subscriber_number: "123456789", 
            substance_abuse: false, 
            tobacco_use: false
        }, 
        trading_partner_id: "MOCKPAYER"
    }

@response = pd.enrollment @enrollment

@activity_id = @response["meta"]["activity_id"]

@applicationTitle = "Application #{@activity_id} Submitted"
    respond_to do |format|
        format.html { flash[:notice] = "Registration was successfully created.  The registration id is: #{@activity_id}"
                       render :index
                        }
        format.json { render :show, status: :created, location: @registration }
    end
  end

  # PATCH/PUT /registrations/1
  # PATCH/PUT /registrations/1.json
  def update
    respond_to do |format|
      if @registration.update(registration_params)
        format.html { redirect_to @registration, notice: 'Registration was successfully updated.' }
        format.json { render :show, status: :ok, location: @registration }
      else
        format.html { render :edit }
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /registrations/1
  # DELETE /registrations/1.json
  def destroy
    @registration.destroy
    respond_to do |format|
      format.html { redirect_to registrations_url, notice: 'Registration was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_registration
      @registration = Registration.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def registration_params
      params[:registration]
    end
end
