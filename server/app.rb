require_relative 'env'

module DataFetch
  def data_fetch
    {
      example: [
        { a: 100 + rand(10) },
        { b: 200 + rand(50) },
        { c: 150 + rand(80) },
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
