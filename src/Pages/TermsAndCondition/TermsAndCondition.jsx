import React from "react";
import style from "./termsAndCondition.module.css";
import Footer from "../../Pages/HomePage/component/Footer/Footer";
import NavBar from "../../Pages/HomePage/component/Hero/NavBar/NavBar";

const TermsAndCondition = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.container1}></div>
        <NavBar></NavBar>
        <div className={style.textContainer}>
          <h1>Terms and Condition</h1>
          <h4>Introduction</h4>
          <p>
            These Terms and Conditions {`("Terms")`} govern the relationship
            between you {`("Client" or "you")`} and Explorify Trips Pvt. Ltd.
            {`("Explorify Trips," "company," "we," or "us")`}. By booking any
            tour or service with Explorify Trips, you agree to be bound by these
            Terms. Please read them carefully.
          </p>
          <h4>Scope of Services</h4>
          <p>Our services include but are not limited to:</p>
          <li>
            <strong>Group Travel:</strong> Organized tours for groups to various
            destinations.
          </li>
          <li>
            <strong>Customized Trips:</strong> Tailor-made itineraries to suit
            individual or group preferences.
          </li>
          <li>
            <strong>Backpacking and Biking Trips:</strong> Adventure-oriented
            and budget-friendly trips for individuals and groups.
          </li>
          <h4>Booking and Payment Terms</h4>
          <li>
            <strong>Booking Confirmation:</strong> To secure your booking, a
            specified deposit must be paid at the time of booking. All quotes
            are tentative and subject to change based on availability and
            pricing at the time of the final payment. Any changes pertaining to
            inclusions of your booking including hotel, airlines, itinerary will
            be communicated to you within 72 hours{" "}
            {`(excluding Saturday, Sunday,
            and Public Holidays)`}{" "}
            of such change occurrence.
          </li>
          <li>
            <strong>Payment Policy:</strong> Payments must be made according to
            the Payment Policy provided at the time of booking. Accepted payment
            methods include credit/debit cards, bank transfers, and online
            payment gateways. Payments are to be made in INR, with exchange
            rates applied based on the prevailing Rate of Exchange on the day of
            final payment.
          </li>
          <li>
            <strong>Failure to Pay:</strong> Failure to pay the full amount by
            the specified due date may result in the cancellation of your
            booking or services, at our sole discretion.
          </li>
          <li>
            <strong>Government Compliance:</strong> As per current Indian
            government regulations, a 20% TCS (Tax Collected at Source) will be
            applicable on payments for international travel exceeding ₹7 lakhs
            in a financial year.
          </li>
          <li>
            <strong>Forfeiture Clause:</strong> Any cash deposits made without
            the knowledge of Explorify Trips in its bank accounts against a
            booking will be forfeited.
          </li>
          <h4>Pricing and Inclusions</h4>
          <li>
            <strong>Pricing Policy:</strong> Prices are based on current
            availability and foreign exchange rates. The final price will be
            confirmed at the time of booking and may be subject to change based
            on fluctuations.
          </li>
          <li>
            <strong>Inclusions:</strong> Inclusions are specified in the
            itinerary provided at the time of booking. Any additional services
            requested will be charged separately.
          </li>
          <h4>Cancellation and Refund Policy</h4>
          <li>
            <strong>Cancellation by Client:</strong> All cancellations must be
            submitted in writing to Explorify Trips. Cancellation charges apply
            as per the policy provided at the time of booking Refunds, if
            applicable, will be processed within 7-10 working days.
          </li>
          <h4>Itinerary Changes</h4>
          <li>
            <strong>Modification by Explorify Trips:</strong> We reserve the
            right to alter itineraries, accommodations, or transportation
            arrangements due to unforeseen circumstances, including weather
            conditions, political unrest, or other factors beyond our control.
            Any changes will be communicated promptly.
          </li>
          <li>
            <strong>Modification by Client:</strong> Any changes requested by
            the client after booking confirmation are subject to availability
            and may incur additional charges.
          </li>
          <li>
            <strong>Group Tours:</strong> Group tours will operate subject to a
            minimum group strength of 10 full-paying passengers. If the minimum
            group size is not met, or due to cancellations, an alternative date
            or tour option may be provided. Refunds will be issued for land
            portions, minus any non-refundable expenses.
          </li>
          <li>
            <strong>On-Tour Changes:</strong> During the tour, itinerary changes
            may occur due to natural calamities or safety considerations.
            Explorify Trips will strive to minimize any disruptions to your
            travel experience.
          </li>
          <h4>Travel Insurance</h4>
          <li>
            <strong>Mandatory Insurance:</strong> We strongly recommend that all
            clients obtain comprehensive travel insurance covering trip
            cancellations, medical emergencies, and loss of baggage. Explorify
            Trips is not responsible for losses not covered by insurance.
          </li>
          <li>
            <strong>Medical Conditions:</strong> Clients must disclose any
            medical conditions that may affect their ability to fully
            participate in the tour. Explorify Trips reserves the right to
            request a medical fitness certificate.
          </li>
          <h4>Health and Safety</h4>
          <li>
            <strong>Health Requirements:</strong> Clients are responsible for
            meeting all health requirements, including vaccinations, for their
            destination{`(s)`}. Any existing medical conditions must be
            disclosed to Explorify Trips prior to booking.
          </li>
          <li>
            <strong>Safety Guidelines:</strong> Clients must adhere to all
            safety instructions provided during their trip. Failure to do so may
            result in termination of the tour without refund.
          </li>
          <li>
            <strong>Adventure Activities:</strong> Clients participating in
            adventure activities do so at their own risk and must ensure they
            are medically fit to do so. Explorify Trips is not liable for any
            injury or loss of life resulting from such participation.
          </li>
          <h4>Travel Documents</h4>
          <li>
            <strong>Passport and Visas:</strong> Clients are responsible for
            obtaining valid passports and visas for their destination{`(s)`}.
            Explorify Trips will provide guidance and assistance as needed.
          </li>
          <li>
            <strong>Document Validity:</strong> Passports must be valid for at
            least six months from the date of return to India. For domestic
            travel, a government-issued ID card with a photograph is required.
          </li>
          <h4>Airline Guidelines</h4>
          <li>
            <strong>Flight Delays and Cancellations:</strong> Explorify Trips is
            not responsible for any delays, cancellations, or disruptions caused
            by airlines. Clients must contact the airline directly for
            assistance.
          </li>
          <li>
            <strong>Baggage:</strong> Explorify Trips is not liable for baggage
            delays or losses caused by airlines. Travelers must manage such
            issues directly with the airline.
          </li>
          <li>
            <strong>Additional Airline Charges:</strong> Any increase in
            government taxes, airfare, fuel surcharges, or airline taxes charged
            by the airlines before the issuance of flight tickets will be
            charged extra, irrespective of the booking date.
          </li>
          <li>
            <strong>Flight Meals:</strong> Complimentary meals on flights depend
            on the type of carrier booked. Low-Cost Carriers {`(LCC)`} may not
            include meals or water as part of the ticket price.
          </li>
          <h4>Accommodation Guidelines</h4>
          <li>
            <strong>Check-In/Check-Out Times:</strong> Standard check-in time is
            3 PM, and check-out time is 11 AM, subject to hotel policies. Early
            check-in or late check-out may incur additional charges.
          </li>
          <li>
            <strong>Room Allocation:</strong> Room sizes and amenities may vary
            based on the destination and hotel category. Air-conditioned rooms
            may not be available in certain regions, such as domestic hill
            stations in India. Clients are responsible for any damages incurred
            during their stay.
          </li>
          <li>
            <strong>Additional Hotel Charges:</strong> City tax, mini-bar usage,
            and room services, if applicable, must be paid directly at the
            hotel.
          </li>
          <li>
            <strong>Hotel Changes:</strong> Btech Travel wala reserves the right
            to change hotels due to unforeseen circumstances. Clients will be
            informed of such changes as soon as possible.
          </li>
          <h4>Transfer and Sightseeing</h4>
          <li>
            <strong>Transfers:</strong> Transfers are arranged according to the
            itinerary and are not on a disposable basis. Clients must be
            punctual for all transfers as delays may affect the overall
            itinerary.
          </li>
          <li>
            <strong>Sightseeing:</strong> Sightseeing activities may be subject
            to change or cancellation due to local conditions. No refunds or
            compensation will be provided for unused services.
          </li>
          <li>
            <strong>Self-Arranged Transfers:</strong> For certain customized
            trips, clients may be required to arrange their own transfers to
            departure points. Explorify Trips will provide guidance on nearby
            accommodation if necessary.
          </li>
          <h4>Limitation of Liability</h4>
          <li>
            <strong>Third-Party Services:</strong> Explorify Trips acts as an
            intermediary between clients and third-party service providers
            {`(hotels, airlines, transporters, etc.)`}. Explorify Trips is not
            liable for any loss, injury, or damage caused by these third
            parties.
          </li>
          <li>
            <strong>Force Majeure:</strong> Explorify Trips is not liable for
            any failure to perform its obligations due to events beyond its
            control, such as natural disasters, wars, strikes, or pandemics.
          </li>
          <li>
            <strong>Liability for Personal Belongings:</strong> Explorify Trips
            is not responsible for the loss of personal belongings, including
            passports, Aadhar cards, PAN cards, driving licenses, etc., during
            the tour.
          </li>
          <h4>Conduct and Behaviour</h4>
          <li>
            <strong>Code of Conduct:</strong> Clients are expected to behave
            respectfully towards fellow travelers, local customs, and laws.
            Misconduct may result in the termination of services without a
            refund.
          </li>
          <li>
            <strong>Responsibility for Damages:</strong> Clients will be held
            responsible for any damages or losses caused by their actions during
            the trip.
          </li>
          <h4>Privacy and Data Protection</h4>
          <li>
            <strong>Data Collection:</strong> Explorify Trips collects personal
            data to provide travel services. This data will be handled in
            accordance with our Privacy Policy, compliant with the Indian
            Information Technology Act, 2000, and GDPR for clients from the EU.
          </li>
          <li>
            <strong>Data Sharing:</strong> Client data may be shared with
            third-party service providers as necessary for fulfilling the tour
            services.
          </li>
          <h4>Governing Law and Jurisdiction</h4>
          <li>
            <strong>Legal Compliance:</strong> These Terms are governed by the
            laws of India, including the Consumer Protection Act, 2019, and the
            Information Technology Act, 2000.
          </li>
          <li>
            <strong>Complaints Procedure:</strong> If you have any complaints,
            please contact us immediately. We will attempt to resolve your
            complaint as quickly as possible.
          </li>
          <li>
            <strong>Dispute Resolution:</strong> Any disputes arising out of
            these Terms shall be resolved through mediation or arbitration as
            per Indian law.
          </li>
          <li>
            <strong>Jurisdiction:</strong> Any disputes arising from these Terms
            or related to Explorify Tripsa's services shall be subject to the
            exclusive jurisdiction of the courts or similar institutions in
            Delhi, India.
          </li>
          <h4>Amendments to Terms</h4>
          <li>
            <strong>Right to Amend:</strong> Explorify Trips reserves the right
            to amend these Terms at any time. Any changes will be communicated
            via our website, and continued use of our services constitutes
            acceptance of the updated Terms.
          </li>
          <h4>Acceptance of Terms</h4>
          <li>
            By booking a tour with Explorify Trips , you acknowledge that you
            have read, understood, and agreed to these Terms and Conditions.
            These Terms constitute the entire agreement between you and Btech
            Travelwala regarding your use of our services.
          </li>
          <h4>Contact Information</h4>
          <li>
            For any inquiries or issues, please contact our customer service
            team at connect@Explorify Tripsa.in or 7004555717. Our office hours
            are 11.30 AM-9.30 PM.
          </li>
          <h4>Miscellaneous</h4>
          <li>
            <strong>Severability:</strong> If any provision of these Terms is
            found to be invalid or unenforceable, the remaining provisions shall
            continue in full force and effect.
          </li>
          <li>
            <strong>Entire Agreement:</strong> These Terms constitute the entire
            agreement between you and us regarding your use of our services.
          </li>
          <h4>Force Majeure Clause</h4>
          <li>
            <strong>Events Covered:</strong> This clause covers natural
            disasters, wars, strikes, pandemics, or other events beyond our
            control.
          </li>
          <li>
            <strong>Rights and Obligations:</strong> In the event of a force
            majeure, we may cancel the trip, and you may be entitled to a refund
            minus any non-refundable expenses.
          </li>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TermsAndCondition;
