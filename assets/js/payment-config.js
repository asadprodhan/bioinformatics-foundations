// BCRTI payment configuration
window.BCRTI_PAYMENT = {
  stripePaymentLink: "https://buy.stripe.com/6oUaEW6gT2dc7hl6PJcjS00",
  invoiceEmail: "UPDATE_BCRTI_EMAIL"
};

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.BCRTI_PAYMENT || {};

  // Stripe payment
  document.querySelectorAll("[data-stripe-pay]").forEach(a => {
    const link = (cfg.stripePaymentLink || "").trim();

    if (link && !link.startsWith("UPDATE_")) {
      a.href = link;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.href = "#payment-not-configured";
      a.addEventListener("click", e => {
        e.preventDefault();
        alert("Online payment is being configured. Please request an invoice or contact BCRTI.");
      });
    }
  });

  // Invoice requests
  document.querySelectorAll("[data-invoice-request]").forEach(a => {
    const email = (cfg.invoiceEmail || "").trim();
    const type = a.dataset.invoiceRequest || "purchase";

    if (email && !email.startsWith("UPDATE_")) {
      a.href = `mailto:${email}?subject=${encodeURIComponent(
        "BCRTI invoice request — " + type
      )}`;
    } else {
      a.href = "contact.html";
    }
  });
});
