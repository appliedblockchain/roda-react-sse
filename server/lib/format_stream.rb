module FormatStream

  SSE_IDS = {}

  def format_stream(stream, hash)
    out = ""
    id = SSE_IDS[:stream] || 0 # we need an auto-increment id for the sse to work
    # this is the (simple) output format - id: ID \n data: [JSON] \n\n
    out << "id: #{id}\n"
    out << "data: #{json_dump hash} \n\n" # json data
    SSE_IDS[:stream] = id
    out
  end

  private

  def json_dump(hash)
    Oj.dump hash, mode: :compat
  end

end
