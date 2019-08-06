function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let l11 = l1;
  let l22 = l2;
  let curry = 0;
  let p = new ListNode(0);
  while (l11 && l22) {
    const temp = l11.val + l22.val + curry;
    p.next = new ListNode(temp % 10);
    curry = Math.floor(temp / 10);
    l11 = l11.next;
    l22 = l22.next;
    p = p.next;
  }
  if (l11) {
    while (l11) {
      const temp = l11.val + curry;
      p.next = new ListNode(temp % 10);
      curry = Math.floor(temp / 10);
      l11 = l11.next;
      p = p.next;
    }
  }
  if (l22) {
    while (l22) {
      const temp = l22.val + curry;
      p.next = new ListNode(temp % 10);
      curry = Math.floor(temp / 10);
      l22 = l22.next;
      p = p.next;
    }
  }
  if (curry === 1) {
    p.next = new ListNode(1);
  }
  return p.next;
};