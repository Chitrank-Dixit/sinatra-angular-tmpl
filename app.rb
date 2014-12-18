require 'rubygems'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/json'
require "sinatra/config_file"
require 'json'
require 'pry-byebug'

# require './helpers/some_helper'

class SampleWeb < Sinatra::Base
  register Sinatra::ConfigFile

  configure do
    enable :sessions
    config_file 'config/config.yml'
  end

  get '/version' do
    "#{settings.version}"
  end

  get '/accounts' do
    @title = "Sample v#{settings.version}"
    erb :accounts
  end

  get '/home' do
    @title = "Sample v#{settings.version}"
    erb :home
  end

  get '/' do
    @title = "sample v#{settings.version}"
    erb :index
  end

  post '/accounts/login' do
    # TODO:: Implement
  end

  post '/accounts/signup' do
    # TODO:: Implement
  end
  
end
