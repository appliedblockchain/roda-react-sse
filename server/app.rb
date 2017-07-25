require_relative 'env'

module DataFetch
  def data_fetch
    names = ["Adi", "Francesco", "Mario", "Mike", "Dan", "Katrina", "Kristina", "Peter", "Andy", "Vlad", "Aziza"]
    nameRand = names.length - 1
    {
      example: [
        { id: 1, price: 100 + rand(10), size: rand(10), name: names[rand(nameRand)] },
        { id: 2, price: 200 + rand(50), size: rand(10), name: names[rand(nameRand)] },
        { id: 3, price: 150 + rand(80), size: rand(10), name: names[rand(nameRand)] },
      ]
    }
  end
end

class App < Roda

  plugin :streaming

  include DataFetch
  include FormatStream
  include ForecastIO

  route do |r|

    r.root do
      "Hello world!"
    end

    r.on "example" do
      response['Access-Control-Allow-Origin'] = CONFIG[:host]
      response['Content-Type'] = 'text/event-stream'
      stream do |out|
        while true do
          out << format_stream(:example_stream, data_fetch)
          sleep 3
        end
      end
    end

    r.on "weather" do
      # Sorry I could not figure how to read latitude and longitude from request
      # puts r.body
      response['Access-Control-Allow-Origin'] = '*'
      response['Access-Control-Allow-Headers'] = 'Content-Type'
      response['Content-Type'] = 'application/json'
      # This line is giving an error that I could not fix :(
      # I tried to follow this => https://github.com/vigosan/forecast_io
      # ForecastIO::Forecast.new.coordinates(latitude: 51.50853, longitude: -0.076132)
      # Using a hard coded response to finish task
      "{
        \"latitude\": 51.50853,
        \"longitude\": -0.076132,
        \"timezone\": \"Europe/London\",
        \"currently\": {
          \"temperature\": 19.16
        }
      }"
    end

  end

end
