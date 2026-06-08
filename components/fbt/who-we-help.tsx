'use client'

import { useState } from 'react'
import { Zap, HeartPulse, Wind, AlertCircle, Brain, Waves, Trophy, Briefcase, GraduationCap, X } from 'lucide-react'

type LearnMoreSection = {
  title: string
  body?: string
  items?: string[]
}

type LearnMoreContent = {
  hook: string
  intro: string
  sections: LearnMoreSection[]
  goal: string
  closing: string
}

type Category = {
  icon: React.ElementType
  title: string
  desc: string
  learnMore: LearnMoreContent
}

type SubSection = {
  id: string
  title: string
  subtitle: string
  accentColor: string
  cols: string
  categories: Category[]
}

const subsections: SubSection[] = [
  {
    id: 'repair',
    title: 'REPAIR',
    subtitle: 'Recover from injury and neurological conditions.',
    accentColor: '#005FDE',
    cols: 'sm:grid-cols-2 lg:grid-cols-4',
    categories: [
      {
        icon: Zap,
        title: 'Concussion / mTBI',
        desc: 'Brain fog, headaches, dizziness, memory problems, fatigue, and light sensitivity.',
        learnMore: {
          hook: "When the Brain's Communication System Gets Shaken",
          intro: "A concussion is often called a \"mild\" traumatic brain injury, but there is nothing mild about the symptoms it can create. A concussion occurs when a blow, bump, fall, motor vehicle accident, workplace injury, sports collision, or sudden whiplash movement causes the brain to move rapidly inside the skull. Even though the injury cannot appear on a standard CT scan or MRI, the brain's communication system can be disrupted. Many people are told their scans are normal, yet they continue to struggle with headaches, brain fog, memory problems, dizziness, fatigue, anxiety, sleep disturbances, and difficulty concentrating.",
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: "Think of your brain as a city filled with highways carrying information. After a concussion, those highways become congested. Messages still travel, but they move more slowly and require significantly more energy. As a result, everyday activities such as working, driving, making decisions, reading, exercising, or tolerating noise can become exhausting.",
            },
            {
              title: 'Common Symptoms',
              items: ['Brain fog', 'Memory problems', 'Slower processing speed', 'Headaches', 'Dizziness', 'Balance difficulties', 'Light and noise sensitivity', 'Anxiety and irritability', 'Mental fatigue'],
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: "The Cognitive Circuit Training® Program (CCT®) is designed to stimulate neuroplasticity — the brain's ability to create new connections and strengthen and repair existing ones. Each 90-minute session combines:",
              items: ['Cognitive training', 'Balance training', 'Visual and oculomotor exercises', 'Sensory integration', 'Multisensory learning', 'Emotional regulation strategies'],
            },
          ],
          goal: 'Help the brain communicate more efficiently, improve cognitive endurance, reduce overload, and support a successful return to work, family life, exercise, and daily activities.',
          closing: "Your Brain Isn't Broken. It's Trying to Reconnect.",
        },
      },
      {
        icon: HeartPulse,
        title: 'Stroke Recovery',
        desc: 'Helping the brain build new routes after blood flow injury.',
        learnMore: {
          hook: 'When Blood Flow to the Brain Is Interrupted',
          intro: 'A stroke occurs when blood flow to part of the brain is blocked or when a blood vessel ruptures. Without adequate oxygen and nutrients, brain cells can become damaged. Depending on the area affected, a stroke can impact movement, balance, speech, memory, attention, emotional regulation, problem-solving, and processing speed. Recovery often continues long after the initial medical event.',
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: 'Imagine a major highway suddenly closing. Traffic backs up, alternate routes become overloaded, and reaching certain destinations becomes difficult. The brain faces a similar challenge after a stroke. Areas that once performed certain functions can no longer work efficiently, requiring other brain networks to help compensate.',
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The brain retains the ability to adapt and reorganize throughout life. The CCT® Program is designed to challenge multiple brain systems simultaneously through:',
              items: ['Cognitive exercises', 'Balance activities', 'Visual processing tasks', 'Motor planning activities', 'Multisensory stimulation', 'Emotional regulation training'],
            },
          ],
          goal: 'To help improve cognitive performance, confidence, endurance, balance, and overall quality of life after stroke.',
          closing: 'The Brain Can Find New Routes.',
        },
      },
      {
        icon: Wind,
        title: 'COVID Brain Fog',
        desc: 'For lingering brain fog, fatigue, slower thinking, and poor focus after COVID.',
        learnMore: {
          hook: 'When the Infection Is Gone but the Symptoms Remain',
          intro: 'Many people recover from COVID-19 only to find that their thinking never fully returns to normal. Months and years after the infection has been resolved, they can continue experiencing brain fog, difficulty concentrating, memory problems, mental fatigue, slower processing speed, reduced productivity, and word-finding difficulties. These symptoms are real and can significantly affect work, family life, and daily functioning.',
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: "Researchers believe COVID-related cognitive symptoms can involve inflammation, changes in blood flow, immune system activation, nervous system dysfunction, and disruptions in brain network efficiency. Many patients describe feeling as though their brain is \"stuck in a fog.\"",
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program is designed to activate multiple brain systems at once through:',
              items: ['Cognitive challenges', 'Visual processing exercises', 'Balance activities', 'Multisensory learning', 'Attention training', 'Emotional regulation techniques'],
            },
          ],
          goal: 'To help individuals regain clarity, confidence, mental stamina, and cognitive performance.',
          closing: 'The Virus Left. The Brain Fog Stayed.',
        },
      },
      {
        icon: AlertCircle,
        title: 'Anoxic / Hypoxic Brain Injury',
        desc: 'When the brain has been affected by reduced oxygen.',
        learnMore: {
          hook: "When the Brain Doesn't Receive Enough Oxygen",
          intro: "The brain requires a constant supply of oxygen to function properly. Anoxic brain injury occurs when oxygen is completely interrupted. Hypoxic brain injury occurs when oxygen levels are significantly reduced. Even brief oxygen deprivation can affect memory, attention, judgment, processing speed, and executive function.",
          sections: [
            {
              title: 'These injuries can result from',
              items: ['Cardiac arrest', 'Drowning incidents', 'Choking events', 'Respiratory failure', 'Carbon monoxide exposure', 'Surgical complications'],
            },
            {
              title: 'What Happens Inside the Brain?',
              body: 'The brain is one of the most energy-demanding organs in the body. Without oxygen, brain cells struggle to produce the energy required for communication. Some networks can become less efficient, while others attempt to compensate.',
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program is designed to stimulate brain activity through structured challenges that engage:',
              items: ['Attention', 'Memory', 'Balance', 'Visual processing', 'Motor coordination', 'Emotional regulation'],
            },
          ],
          goal: 'To help improve functional performance, cognitive endurance, confidence, and independence.',
          closing: 'When Oxygen Stops, Brain Function Changes.',
        },
      },
    ],
  },
  {
    id: 'protect',
    title: 'PROTECT',
    subtitle: 'Maintain independence, balance and cognitive reserve.',
    accentColor: '#0A2F61',
    cols: 'sm:grid-cols-2',
    categories: [
      {
        icon: Brain,
        title: 'Mild Cognitive Impairment (MCI)',
        desc: 'Memory changes, slower processing, word-finding problems, and reduced mental sharpness.',
        learnMore: {
          hook: 'When Memory Changes Are More Than Normal Aging',
          intro: "Most people occasionally forget a name, misplace their keys, or walk into a room and forget why they went there. Mild Cognitive Impairment (MCI) occurs when changes in memory, attention, processing speed, or thinking abilities become more noticeable than expected for normal aging, yet are not severe enough to interfere significantly with daily independence. Individuals with MCI often recognize that something feels different. They can find themselves forgetting appointments, struggling to recall conversations, taking longer to complete familiar tasks, or having difficulty finding the right words.",
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: "As we age, the brain naturally undergoes changes. However, in MCI, some brain networks become less efficient and communication between brain regions can begin to slow. Think of it as a city where some roads are becoming narrower and traffic is starting to back up. The good news is that the brain retains the ability to adapt throughout life — this ability is called neuroplasticity.",
            },
            {
              title: 'Common Symptoms',
              items: ['Forgetting recent conversations', 'Misplacing items more frequently', 'Difficulty finding words', 'Reduced attention and focus', 'Slower processing speed', 'Difficulty multitasking', 'Increased mental fatigue', 'Feeling less mentally sharp'],
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program is designed to challenge multiple brain systems simultaneously. Each session combines:',
              items: ['Cognitive exercises', 'Balance training', 'Visual processing activities', 'Multisensory learning', 'Reaction-time training', 'Emotional regulation techniques', 'Movement-based brain stimulation'],
            },
            {
              title: 'Why Cognitive Reserve Matters',
              body: "Think of cognitive reserve as having extra roads available when traffic becomes heavy. The more pathways the brain has available, the better it can adapt to aging and neurological challenges. Building cognitive reserve can help support memory, attention, processing speed, problem solving, daily functioning, and long-term brain health.",
            },
          ],
          goal: 'To help individuals maintain independence, improve cognitive performance, strengthen cognitive reserve, and support healthy brain aging.',
          closing: 'Aging Is Inevitable. Cognitive Decline Is Not.',
        },
      },
      {
        icon: Waves,
        title: 'Balance Issues',
        desc: 'Dizziness, unsteadiness, fall risk, vestibular problems, and confidence with walking.',
        learnMore: {
          hook: "When the World Doesn't Feel Steady",
          intro: "Balance problems can make everyday activities challenging and sometimes frightening. Many people describe feeling unsteady, off-balance, dizzy, lightheaded, or uncertain when walking. Others can notice increased falls, difficulty navigating crowds, trouble walking on uneven surfaces, or feeling uncomfortable when turning their head quickly. Balance problems can occur at any age and often involve much more than the ears.",
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: 'Balance is controlled by several systems working together: the eyes (which provide information about where you are in space), the inner ear (which detects movement and position changes), the body (sensors in muscles and joints), and the brain (which acts as the control center integrating all three systems). When communication between these systems becomes disrupted, balance can suffer.',
            },
            {
              title: 'Common Causes of Balance Problems',
              items: ['Concussion', 'Stroke', 'Vestibular disorders', 'Aging', 'Neurological conditions', 'Inner ear dysfunction', 'COVID-related neurological changes', 'Medication side effects', 'Deconditioning'],
            },
            {
              title: 'Common Symptoms',
              items: ['Feeling unsteady', 'Dizziness', 'Increased falls', 'Motion sensitivity', 'Difficulty walking in crowds', 'Difficulty walking in the dark', 'Trouble turning quickly', 'Fear of falling', 'Reduced confidence'],
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program incorporates balance training into a comprehensive neuroplasticity-based program. Patients can participate in:',
              items: ['Dynamic balance activities', 'Visual tracking exercises', 'Vestibular stimulation', 'Cognitive tasks performed during movement', 'Sensory integration activities', 'Reaction-time training', 'Dual-task exercises'],
            },
          ],
          goal: 'To help individuals move more confidently, reduce fall risk, improve stability, and regain independence.',
          closing: "Balance Doesn't Start in the Feet. It Starts in the Brain.",
        },
      },
    ],
  },
  {
    id: 'enhance',
    title: 'ENHANCE',
    subtitle: 'Train your brain for peak performance.',
    accentColor: '#005FDE',
    cols: 'sm:grid-cols-3',
    categories: [
      {
        icon: Trophy,
        title: 'Sports Performance',
        desc: 'Reaction time, visual tracking, focus, balance, and decision speed.',
        learnMore: {
          hook: 'Your Body Can Only Perform as Fast as Your Brain',
          intro: "Athletes spend countless hours improving strength, speed, endurance, flexibility, and technique. Yet every movement begins in one place — the brain. Whether it's tracking a fast-moving ball, reacting to an opponent, maintaining balance under pressure, making split-second decisions, or staying mentally composed during competition, the brain serves as the command center for athletic performance. The difference between good and great is often measured in milliseconds.",
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: "Elite athletes don't simply have stronger muscles. They often have faster communication between brain networks responsible for:",
              items: ['Reaction time', 'Visual processing', 'Decision-making', 'Balance', 'Coordination', 'Focus', 'Emotional control', 'Motor planning'],
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program combines:',
              items: ['Reaction-time training', 'Visual tracking exercises', 'Balance training', 'Multisensory learning', 'Cognitive processing challenges', 'Decision-making drills', 'Emotional regulation techniques', 'Dual-task performance activities'],
            },
            {
              title: 'Potential Benefits',
              items: ['Faster reaction time', 'Improved focus', 'Better hand-eye coordination', 'Enhanced balance', 'Faster decision making', 'Improved game awareness', 'Better emotional control under pressure', 'Increased mental endurance'],
            },
          ],
          goal: 'To help athletes train the most important performance organ in the body — the BRAIN.',
          closing: 'Every great play begins in the brain.',
        },
      },
      {
        icon: Briefcase,
        title: 'Executive Performance',
        desc: 'Sharper focus, better memory, faster decisions, stress resilience, and cognitive endurance.',
        learnMore: {
          hook: 'Peak Performance Starts Above the Neck',
          intro: 'Executives are expected to make high-level decisions, solve complex problems, manage stress, communicate effectively, and maintain focus for hours at a time. Yet few professionals actively train the organ responsible for all of those abilities. Just as elite athletes train for physical performance, executives can train for cognitive performance.',
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: 'Leadership places enormous demands on the brain. Every day executives rely on:',
              items: ['Strategic thinking', 'Problem solving', 'Memory', 'Focus', 'Emotional intelligence', 'Decision making', 'Cognitive flexibility', 'Stress management'],
            },
            {
              title: 'The Hidden Cost of Mental Fatigue',
              body: 'Many executives notice difficulty concentrating, mental fatigue, slower recall, reduced productivity, increased stress, decision fatigue, difficulty multitasking, and reduced creativity. These changes are often viewed as normal consequences of success. They don\'t have to be.',
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program combines:',
              items: ['Advanced cognitive training', 'Balance and coordination activities', 'Multisensory learning', 'Attention and focus exercises', 'Visual processing tasks', 'Emotional regulation techniques', 'Brain endurance training'],
            },
            {
              title: 'Potential Benefits',
              items: ['Sharper focus', 'Faster decision making', 'Improved productivity', 'Better memory', 'Greater mental stamina', 'Enhanced creativity', 'Improved stress resilience', 'Stronger executive function'],
            },
          ],
          goal: 'To help leaders think clearly, perform consistently, and maintain peak cognitive function throughout their careers.',
          closing: 'Your most important business asset is your brain.',
        },
      },
      {
        icon: GraduationCap,
        title: 'Student Performance',
        desc: 'Attention, memory, processing speed, learning efficiency, and test confidence.',
        learnMore: {
          hook: 'Learning Faster Starts With a Better Performing Brain',
          intro: 'Students today face more mental demands than ever before. School requires constant attention, memory, processing speed, organization, focus, emotional regulation, and the ability to absorb large amounts of information quickly. Many students work harder and harder, yet continue struggling because they are trying to learn with an overloaded brain. The goal isn\'t simply studying more. The goal is creating a brain that learns more efficiently.',
          sections: [
            {
              title: 'What Happens Inside the Brain?',
              body: 'Learning requires multiple brain systems working together simultaneously. When these systems become overwhelmed, learning becomes slower and more frustrating.',
            },
            {
              title: 'Why Some Students Learn Faster',
              body: 'Successful students often possess stronger cognitive skills, including:',
              items: ['Attention', 'Working memory', 'Processing speed', 'Cognitive flexibility', 'Executive function', 'Emotional regulation'],
            },
            {
              title: 'How The Cognitive Circuit Training® Program Can Help',
              body: 'The CCT® Program challenges multiple learning systems simultaneously through:',
              items: ['Cognitive exercises', 'Multisensory learning', 'Balance training', 'Visual processing activities', 'Attention training', 'Memory challenges', 'Emotional regulation strategies', 'Movement-based learning'],
            },
            {
              title: 'Potential Benefits',
              items: ['Improved focus', 'Better memory', 'Faster processing speed', 'Increased concentration', 'Improved test performance', 'Better organization', 'Reduced mental fatigue', 'Greater confidence'],
            },
          ],
          goal: 'To help students build stronger learning skills, improve academic performance, and develop a brain that is prepared for lifelong success.',
          closing: "Don't Just Study Harder. Train Your Brain Smarter.",
        },
      },
    ],
  },
]

export default function WhoWeHelp() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  return (
    <section id="how-we-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            How We Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-4">
            Our Team Is Here for You
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto mb-5">
            Whether you&apos;re recovering from an injury or proactively supporting your brain health.
          </p>

          {/* Blue bar */}
          <div className="inline-flex items-center gap-3 bg-[#ECFAFF] border border-[#005FDE]/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-[#0ED8FE] rounded-full flex-shrink-0" />
            <span className="text-[#0A2F61] font-semibold text-sm">
              Flexible Payment Options —{' '}
              <span className="text-[#005FDE]">Insurance, PPO, Self-Pay, Worker&apos;s Compensation</span>
            </span>
          </div>
        </div>

        {/* REPAIR / PROTECT / ENHANCE */}
        <div className="mt-16 space-y-20">
          {subsections.map(({ id, title, subtitle, accentColor, categories, cols }) => (
            <div key={id}>
              <div className="mb-8">
                <h3
                  className="text-3xl lg:text-4xl font-black tracking-widest uppercase"
                  style={{ color: accentColor }}
                >
                  {title}
                </h3>
                <p className="text-[#67656E] text-lg mt-1">{subtitle}</p>
              </div>

              <div className={`grid ${cols} gap-6`}>
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <div
                      key={cat.title}
                      className="rounded-2xl border border-[#E2E2E2] p-7 hover:shadow-lg hover:border-[#005FDE]/20 transition-all flex flex-col"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                        style={{ backgroundColor: `${accentColor}12` }}
                      >
                        <Icon size={22} style={{ color: accentColor }} />
                      </div>
                      <h4 className="font-bold text-[#0A2F61] text-lg mb-2">{cat.title}</h4>
                      <p className="text-[#67656E] text-sm leading-relaxed flex-1">{cat.desc}</p>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className="mt-5 text-[#005FDE] text-sm font-semibold hover:underline text-left"
                      >
                        Learn More →
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#005FDE] to-[#0D71F7] rounded-3xl p-8 md:p-10 text-center text-white">
          <div className="text-2xl md:text-3xl font-black mb-3">
            Do you worry about getting Dementia or Memory Loss?
          </div>
          <p className="text-white/85 text-lg mb-6 max-w-2xl mx-auto">
            You don&apos;t have to wait until it gets worse. Early intervention makes all the difference.
            Talk to our team today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#005FDE] hover:bg-[#ECFAFF] px-8 py-3.5 rounded-full font-bold text-base transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      {/* Learn More Modal */}
      {activeCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveCategory(null)}
        >
          <div
            className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-[#E2E2E2] px-8 pt-7 pb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#0A2F61]">{activeCategory.title}</h2>
                <p className="text-[#005FDE] font-semibold text-sm mt-1 italic">{activeCategory.learnMore.hook}</p>
              </div>
              <button
                onClick={() => setActiveCategory(null)}
                className="flex-shrink-0 mt-1 text-[#67656E] hover:text-[#0A2F61] transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-8 py-6 space-y-6">
              {/* Intro */}
              <p className="text-[#3D3D3D] text-sm leading-relaxed">{activeCategory.learnMore.intro}</p>

              {/* Sections */}
              {activeCategory.learnMore.sections.map((sec) => (
                <div key={sec.title}>
                  <h3 className="font-bold text-[#0A2F61] text-base mb-2">{sec.title}</h3>
                  {sec.body && (
                    <p className="text-[#3D3D3D] text-sm leading-relaxed mb-2">{sec.body}</p>
                  )}
                  {sec.items && (
                    <ul className="space-y-1.5 ml-1">
                      {sec.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#005FDE] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Our Goal */}
              <div className="bg-[#ECFAFF] border border-[#005FDE]/15 rounded-2xl p-5">
                <h3 className="font-bold text-[#0A2F61] text-sm uppercase tracking-wider mb-1.5">Our Goal</h3>
                <p className="text-[#3D3D3D] text-sm leading-relaxed">{activeCategory.learnMore.goal}</p>
              </div>

              {/* Closing tagline */}
              <p className="text-center text-[#005FDE] font-bold text-lg italic pb-2">
                {activeCategory.learnMore.closing}
              </p>
            </div>

            {/* Modal footer */}
            <div className="sticky bottom-0 bg-white rounded-b-3xl border-t border-[#E2E2E2] px-8 py-4 flex justify-between items-center gap-4">
              <button
                onClick={() => setActiveCategory(null)}
                className="text-[#67656E] text-sm font-medium hover:text-[#0A2F61] transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveCategory(null)}
                className="bg-[#005FDE] hover:bg-[#0D71F7] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
