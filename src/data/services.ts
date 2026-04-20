import orthoImg from "@/assets/services/ortho-care.jpg";
import neuroImg from "@/assets/services/neuro-rehab.jpg";
import sportsImg from "@/assets/services/sports-rehab.jpg";
import elderlyImg from "@/assets/services/elderly-care.jpg";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  intro: string;
  conditions: { title: string; desc: string }[];
  approach: { title: string; desc: string }[];
  benefits: string[];
  whyChooseUs: string[];
  closing: string;
  closingTitle?: string;
};

export const categories = [
  "Orthopaedic & Musculoskeletal Care",
  "Neurological Rehabilitation",
  "Sports Rehabilitation",
  "Elderly & Wellness Care",
] as const;

export const services: Service[] = [
  {
    slug: "orthopaedic-musculoskeletal-care",
    title: "Orthopaedic & Musculoskeletal Care",
    shortDescription:
      "Comprehensive treatment for bones, joints, muscles, ligaments, and tendons.",
    image: orthoImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "At our clinic, we provide expert care for a wide range of orthopaedic and musculoskeletal conditions affecting bones, joints, muscles, ligaments, and tendons. Whether you are recovering from an injury, managing a chronic condition, or healing after surgery, our goal is to restore your mobility, reduce pain, and improve your quality of life.",
    conditions: [
      { title: "Fractures & Bone Injuries", desc: "From minor cracks to complex fractures, we ensure proper healing and alignment." },
      { title: "Joint Disorders", desc: "Including arthritis, stiffness, inflammation, and joint degeneration." },
      { title: "Muscle & Soft Tissue Injuries", desc: "Sprains, strains, ligament tears, tendon injuries, and frozen shoulder." },
      { title: "Back & Neck Pain", desc: "Caused by posture issues, lower back pain, disc problems, or injury." },
      { title: "Sports Injuries", desc: "Tailored recovery programs for athletes and active individuals." },
      { title: "Post-Surgical Rehabilitation", desc: "Helping patients regain strength, flexibility, and function after orthopaedic surgeries." },
    ],
    approach: [
      { title: "Accurate Diagnosis", desc: "Using clinical assessment and evidence-based methods." },
      { title: "Pain Management", desc: "Through non-invasive and therapeutic techniques." },
      { title: "Physiotherapy & Rehabilitation", desc: "Programs customized to individual needs." },
      { title: "Strength & Mobility Training", desc: "To restore function and prevent recurrence." },
      { title: "Education & Lifestyle Guidance", desc: "For long-term musculoskeletal health." },
    ],
    benefits: [
      "Reducing pain and swelling",
      "Restoring joint movement and flexibility",
      "Rebuilding muscle strength",
      "Improving balance and coordination",
      "Helping you safely return to daily activities",
    ],
    whyChooseUs: [
      "Experienced orthopaedic and physiotherapy professionals",
      "Personalized treatment plans",
      "Modern equipment and techniques",
      "Focus on long-term recovery and prevention",
      "Compassionate, patient-first care",
    ],
    closingTitle: "Get Back to Pain-Free Living",
    closing:
      "Whether you're dealing with an acute injury or a chronic condition, we are here to support your recovery journey. Our comprehensive orthopaedic and musculoskeletal care is designed to help you move better, feel stronger, and live pain-free.",
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation & Stroke Recovery",
    shortDescription:
      "Specialized care for brain, spine, and nerve conditions to restore independence.",
    image: neuroImg,
    category: "Neurological Rehabilitation",
    intro:
      "We offer advanced neurological rehabilitation services designed to support individuals recovering from stroke, spinal cord injuries, and various neurological and developmental conditions. Our goal is to help patients regain independence, improve functional abilities, and enhance overall quality of life through structured and compassionate care.",
    conditions: [
      { title: "Stroke Recovery", desc: "Focused rehabilitation to improve movement, speech, balance, and daily functioning." },
      { title: "Spinal Cord Injuries", desc: "Helping patients regain strength, mobility, and independence after injury." },
      { title: "Neurological Disorders", desc: "Including paralysis, nerve injuries, and coordination difficulties." },
      { title: "Balance & Coordination Issues", desc: "Addressing dizziness, instability, and fall risk." },
      { title: "Post-Neurosurgical Rehabilitation", desc: "Recovery support after brain or spine surgeries." },
    ],
    approach: [
      { title: "Detailed Assessment", desc: "To understand each patient's neurological condition." },
      { title: "Customized Therapy Plans", desc: "Tailored to individual recovery goals." },
      { title: "Neuro Physiotherapy Techniques", desc: "To improve movement and muscle control." },
      { title: "Balance & Gait Training", desc: "For safe, confident mobility." },
      { title: "Functional Training", desc: "To restore daily living activities." },
    ],
    benefits: [
      "Restoring motor skills and coordination",
      "Improving muscle strength and flexibility",
      "Enhancing speech and cognitive function",
      "Re-learning daily activities such as walking, dressing, and self-care",
      "Preventing complications and promoting long-term recovery",
    ],
    whyChooseUs: [
      "Skilled neuro rehabilitation specialists",
      "Individualized care for every patient",
      "Child-friendly and supportive environment",
      "Evidence-based therapy techniques",
      "Focus on independence and long-term improvement",
    ],
    closingTitle: "Start Your Recovery Journey",
    closing:
      "With the right care and guidance, recovery from neurological conditions is possible. We are committed to helping every patient achieve their maximum potential and lead a more independent and fulfilling life.",
  },
  {
    slug: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    shortDescription:
      "Recover stronger, perform better, prevent injuries — for athletes and active individuals.",
    image: sportsImg,
    category: "Sports Rehabilitation",
    intro:
      "Our Sports Rehabilitation program is designed for athletes and active individuals who want to recover quickly, enhance performance, and prevent future injuries. Whether you are a professional athlete, a fitness enthusiast, or someone returning to activity after an injury, we provide specialized care to help you get back to your peak safely and efficiently.",
    conditions: [
      { title: "Ligament Injuries", desc: "ACL, PCL, and other ligament tears." },
      { title: "Muscle Strains & Tears", desc: "Common in high-impact and repetitive sports." },
      { title: "Tendon Injuries", desc: "Including tennis elbow, golfer's elbow, and Achilles tendon issues." },
      { title: "Joint Injuries", desc: "Shoulder, knee, ankle, and hip injuries." },
      { title: "Overuse Injuries", desc: "Stress injuries caused by repetitive movements." },
      { title: "Post-Surgical Sports Rehab", desc: "Safe return-to-sport programs after surgery." },
    ],
    approach: [
      { title: "Injury Assessment & Diagnosis", desc: "To understand the root cause." },
      { title: "Pain & Inflammation Management", desc: "Using advanced therapy methods." },
      { title: "Sport-Specific Rehabilitation", desc: "Tailored to your activity or game." },
      { title: "Strength & Conditioning Programs", desc: "To rebuild power and endurance." },
      { title: "Flexibility & Mobility Training", desc: "To improve movement efficiency." },
      { title: "Biomechanical Analysis", desc: "To correct posture and movement patterns." },
    ],
    benefits: [
      "Improve strength, speed, and agility",
      "Enhance coordination and balance",
      "Increase endurance and stamina",
      "Optimize movement techniques for better performance",
      "Identify risk factors and correct improper movement patterns",
    ],
    whyChooseUs: [
      "Experienced sports rehabilitation specialists",
      "Customized programs for every sport and fitness level",
      "Advanced equipment and modern therapy techniques",
      "Focus on safe and faster return to activity",
      "Holistic approach to performance and injury prevention",
    ],
    closingTitle: "Get Back in the Game",
    closing:
      "Don't let injuries hold you back. Our sports rehabilitation programs are designed to help you recover faster, perform better, and stay injury-free.",
  },
  {
    slug: "elderly-wellness-care",
    title: "Elderly & Wellness Care",
    shortDescription:
      "Gentle care for better mobility, balance, and quality of life in older adults.",
    image: elderlyImg,
    category: "Elderly & Wellness Care",
    intro:
      "Our Elderly & Wellness Care program is designed to support older adults in maintaining mobility, balance, and independence. With gentle, personalized therapy, we help reduce pain, improve strength, and enhance the overall quality of life — so seniors can continue to enjoy their daily routines with confidence.",
    conditions: [
      { title: "Joint Pain & Arthritis", desc: "Relief and mobility programs for stiff, painful joints." },
      { title: "Balance & Fall Prevention", desc: "Reduce the risk of falls and improve confidence in movement." },
      { title: "Post-Operative Recovery", desc: "Gentle rehabilitation after orthopaedic or other surgeries." },
      { title: "Mobility & Posture Issues", desc: "Improve walking ability, posture, and overall body alignment." },
      { title: "Chronic Pain Management", desc: "Long-term relief through evidence-based therapy." },
    ],
    approach: [
      { title: "Comprehensive Assessment", desc: "To understand each individual's health and mobility goals." },
      { title: "Personalized Therapy Plans", desc: "Adapted to age, condition, and lifestyle." },
      { title: "Gentle Exercise Therapy", desc: "Safe, effective movement to build strength and flexibility." },
      { title: "Balance & Gait Training", desc: "To improve walking ability and prevent falls." },
      { title: "Lifestyle & Home Care Guidance", desc: "Practical tips for safer, more independent daily living." },
    ],
    benefits: [
      "Improve walking ability and posture",
      "Enhance coordination and confidence in movement",
      "Support daily activities like sitting, standing, and climbing stairs",
      "Reduce the risk of falls and injuries",
      "Promote long-term independence and well-being",
    ],
    whyChooseUs: [
      "Experienced therapists trained in geriatric care",
      "Compassionate, patient-first approach",
      "Home care and clinic-based services",
      "Personalized programs for every individual",
      "Focus on safety, comfort, and long-term wellness",
    ],
    closingTitle: "Healthier, Independent Aging",
    closing:
      "We believe every senior deserves to live with comfort, dignity, and independence. Schedule a consultation today and take a step towards healthier aging.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
