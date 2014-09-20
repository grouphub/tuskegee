require 'pokitdok'
pd = PokitDok::PokitDok.new("your_client_id", "your_client_secret")

# Retrieve provider information by NPI
pd.providers(npi: '1467560003')

# Search providers by name (individuals)
pd.providers(first_name: 'JEROME', last_name: 'AYA-AY')

# Search providers by name (organizations)
pd.providers(name: 'Qliance')

# Search providers by location and/or specialty
pd.providers(zipcode: '29307', radius: '10mi')
pd.providers(zipcode: '29307', radius: '10mi', specialty: 'RHEUMATOLOGY')

# Eligibility
@eligibility_query = {
  member: {
      birth_date: '1970-01-01',
      first_name: 'Jane',
      last_name: 'Doe',
      id: 'W000000000'
  },
  provider: {
      first_name: 'JEROME',
      last_name: 'AYA-AY',
      npi: '1467560003'
  },
  service_types: ['health_benefit_plan_coverage'],
  trading_partner_id: 'MOCKPAYER'
}

pd.eligibility @eligibility_query

# Claim
@claim = {
  transaction_code: 'chargeable',
  trading_partner_id: 'MOCKPAYER',
  billing_provider: {
    taxonomy_code: '207Q00000X',
    first_name: 'Jerome',
    last_name: 'Aya-Ay',
    npi: '1467560003',
    address: {
      address_lines: ['8311 WARREN H ABERNATHY HWY'],
      city: 'SPARTANBURG',
      state: 'SC',
      zipcode: '29301'
    },
    tax_id: '123456789'
  },
  subscriber: {
    first_name: 'Jane',
    last_name: 'Doe',
    member_id: 'W000000000',
    address: {
      address_lines: ['123 N MAIN ST'],
      city: 'SPARTANBURG',
      state: 'SC',
      zipcode: '29301'
    },
    birth_date: '1970-01-01',
    gender: 'female'
  },
  claim: {
    total_charge_amount: 60.0,
    service_lines: [
      {
        procedure_code: '99213',
        charge_amount: 60.0,
        unit_count: 1.0,
        diagnosis_codes: ['487.1'],
        service_date: '2014-06-01'
      }
    ]
  }
}

pd.claim @claim

# Retrieve an index of activities
pd.activities 

# Check on a specific activity
pd.activities(activity_id: '5362b5a064da150ef6f2526c')

# Check on a batch of activities
pd.activities(parent_id: '537cd4b240b35755f5128d5c')

# Upload an EDI file
pd.files('trading_partner_id', 'path/to/a_file.edi')

# Get cash prices
pd.cash_prices(cpt_code: '87799', zip_code: '75201')

# Get insurance prices
pd.insurance_prices(cpt_code: '87799', zip_code: '29403')