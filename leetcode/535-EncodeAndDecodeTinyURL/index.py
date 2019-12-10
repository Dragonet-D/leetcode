import string
import random
import math
full_tiny = {}
tiny_full = {}
letters = string.ascii_letters + string.digits
short_url = 'http://tinyurl.com/'
class Codec:

  def encode(self, longUrl: str) -> str:
    """Encodes a URL to a shortened URL.
    """
    def short_addr():
      ans = ''
      tmp = ''
      for i in range(6):
        tmp = letters[random.randint(0, 10000) % 62]
        ans += tmp
      return ans
    if longUrl in full_tiny:
      return short_url + full_tiny[longUrl]
    else:
      suffix = short_addr()
      full_tiny[suffix] = longUrl
      full_tiny[longUrl] = suffix
      return short_url + suffix
  def decode(self, shortUrl: str) -> str:
    """Decodes a shortened URL to its original URL.
    """
    shortUrl = shortUrl.split('/')[-1]
    if shortUrl in full_tiny:
      return full_tiny[shortUrl]
    else:
      return ''

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))