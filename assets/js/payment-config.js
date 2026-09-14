// BCRTI payment configuration. Update these values when your Square link/business email are ready.
window.BCRTI_PAYMENT = {
  squarePaymentLink: "UPDATE_SQUARE_PAYMENT_LINK",
  invoiceEmail: "UPDATE_BCRTI_EMAIL"
};

document.addEventListener("DOMContentLoaded", () => {
  const cfg=window.BCRTI_PAYMENT||{};
  document.querySelectorAll("[data-square-pay]").forEach(a=>{
    const link=(cfg.squarePaymentLink||"").trim();
    if(link && !link.startsWith("UPDATE_")){ a.href=link; a.target="_blank"; a.rel="noopener"; }
    else { a.href="#payment-not-configured"; a.addEventListener("click",e=>{e.preventDefault(); alert("Online payment link is being configured. Please request an invoice or contact BCRTI.");}); }
  });
  document.querySelectorAll("[data-invoice-request]").forEach(a=>{
    const email=(cfg.invoiceEmail||"").trim(); const type=a.dataset.invoiceRequest||"purchase";
    if(email && !email.startsWith("UPDATE_")){ a.href=`mailto:${email}?subject=${encodeURIComponent("BCRTI invoice request — "+type)}`; }
    else { a.href="contact.html"; }
  });
});
