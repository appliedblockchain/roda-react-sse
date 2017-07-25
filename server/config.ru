require_relative 'app'

ForecastIO.configure do |c|
  c.api_key = '340e7e5a4a9a606c4bd5ea2ba37f4755'
end

run App.freeze.app
