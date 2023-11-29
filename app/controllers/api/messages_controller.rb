class Api::MessagesController < ApplicationController
  before_action :set_random_message, only: [:random]

  def random
    render json: { greeting: @random_message.content }
  end

  private

  def set_random_message
    @random_message = Message.order('RANDOM()').first
  end
end
