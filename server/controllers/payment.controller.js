import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


export const paymentHandler = async(req,res,next) => {
const paymentIntent = await stripe.paymentIntents.create({
  amount: req.body.amount,
  currency: "usd",
  description: "TEST PAYMENT",
  metadata: { integration_check: "accept_payment"},
  shipping: req.body.shipping
})
res.status(200).json({
  success: true,
  client_secret: paymentIntent.client_secret
})
}

export const SendStripeApi = async (req,res,next) => {
res.status(200).json({
  stripeApiKey: paymentIntent.process.env.STRIPE_API_KEY
})
}