class Api::UsersController < ApplicationController

    def create
        
        @user = User.create(user_params)
        debugger
        if @user.save
            login(@user)
            render :show
        else
           
            render json: @user.errors.full_messages, status: 401
        end
    end


    def user_params
        params.require(:user).permit(:username, :password)
    end




end