require 'rails_helper'

RSpec.describe User, type: :model do

  before(:each) do 
    @user = User.create(first_name: "John", last_name: "Doe", email: "john@doe.com", age: "45" , city_id: 34)
  end

    describe "#first_name" do
      it "should not be valid without first_name" do
        bad_user = User.create(last_name: "Doe", email: "john@doe.com", age: "45" , city_id: 34)
        expect(bad_user).not_to be_valid
        # test très sympa qui permet de vérifier que la fameuse formule user.errors retourne bien un hash qui contient une erreur concernant le first_name. 
        expect(bad_user.errors.include?(:first_name)).to eq(true)
      end
    end
    
    describe "#last_name" do
      it "should not be valid without email" do
        bad_user = User.create(first_name: "John", last_name: "Doe", age: "45" , city_id: 34)
        expect(bad_user).not_to be_valid
        expect(bad_user.errors.include?(:email)).to eq(true)
      end
    end
end
