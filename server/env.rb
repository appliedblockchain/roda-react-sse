APP_ENV = ENV["RACK_ENV"] || "development"

require 'bundler'
Bundler.require :default, APP_ENV.to_sym

require_relative 'lib/format_stream'


CONFIG = {}

CONFIG[:foreman] = ENV["PORT"] && ENV["PORT"] == "5000" # default for foreman
CONFIG[:port] = CONFIG[:foreman] ? "5100" : "3000"
CONFIG[:host] = case APP_ENV
when "development" then "http://localhost:#{CONFIG[:port]}"
when "staging"     then "http://host.appb.ch.example.com"
when "production"  then "http://host.appb.ch.example.com"
end
