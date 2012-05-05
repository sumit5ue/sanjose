require 'digest/md5'

class PerishableToken < String
  GUID_LENGTH = Digest::MD5.hexdigest('').length
  SIGNATURE_LENGTH = 16

  def valid?
   self == PerishableToken.sign(payload)
  end

  def expired?
    Time.now >= expires_at
  end

  def uid
    payload[0,GUID_LENGTH]
  end

private
  # Returns the payload portion of the token, which is everything
  # except for the signature.
  def payload
    self[0...-SIGNATURE_LENGTH]
  end

  def expires_at
    Time.at(payload[GUID_LENGTH..-1].to_i)
  end

  class <<self
    def generate(time_to_live)
      expires_at = Time.now + time_to_live
      payload = [guid, expires_at.to_i].join
      new(sign(payload))
    end

    # Return a signed copy of the provided text, with the signature
    # appended at the end.
    def sign(text)
      signature = Digest::MD5.hexdigest([text, 'Hello from Events 2'].join)[0...SIGNATURE_LENGTH]
      [text,signature].join
    end

  private
    # Return a globally-unique identifier
    def guid
      now = Time.now
      # On JRuby, the time resolution is only milliseconds, so
      # it is possible to have two back-to-back calls to guid
      # return the same value if only host, pid, thread ID and
      # time are taken into accound. Hence the addition of the
      # random component.
      components = [
        host_and_pid,
        Thread.current.object_id,
        rand,
        now.to_i,
        now.usec
      ]
      Digest::MD5.hexdigest(components.join)
    end

    def host_and_pid
      @host_and_pid ||= [`hostname`.strip, Process.pid].join(':')
    end
  end
end
