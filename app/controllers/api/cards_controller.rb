require 'open-uri'
require 'byebug'
class Api::CardsController < ApplicationController

  def index
    doc = Nokogiri::HTML(open("https://leetcode.com/notes/"))
    byebug
    array_fronts = doc.xpath("//h4[@class='panel-title']")
    array_backs = doc.xpath("//div[@class='note-content]/p")
    @cards = Card.all

    # array_fronts.each_with_index do |front,idx|
    #   front = front
    #   back = array_backs[idx]
    #   new_card= Card.new(front,back)
    #   new_card.save
    # end

  end
end
