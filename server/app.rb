require_relative 'env'

module DataFetch
  def data_fetch
    {
      example: [
        { id: 1, price: 100 + rand(10), size: rand(10) },
        { id: 2, price: 200 + rand(50), size: rand(10) },
        { id: 3, price: 150 + rand(80), size: rand(10) },
      ]
    }
  end
end

class App < Roda

  plugin :streaming

  include DataFetch
  include FormatStream

  route do |r|

    r.root do
      "Hello world!"
    end

    r.on "example" do
      response['Access-Control-Allow-Origin'] = "http://localhost:5100"
      response['Content-Type'] = 'text/event-stream'
      stream do |out|
        while true do
          out << format_stream(:example_stream, data_fetch)
          sleep 3
        end
      end
    end

  end

end
