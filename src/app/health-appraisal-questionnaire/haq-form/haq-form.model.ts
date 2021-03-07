interface Question {
  prompt: string;
  type: string;
  key: string;
};

interface Value { value: any };
interface Ranges {
  high: number;
  med: number;
  low: number;
}

interface Section {
    label: string;
    message?: string;
    ranges?: Ranges;
    sectionTotal?: number;
    values?: Value[];
    questions: Question[];
};

export interface Part {
  label: string;
  subtitle?: string;
  sections: Section[];
};

export interface HAQ { parts: Part[]; };

export class HAQForm implements HAQ {
  parts: Part[];
  private formData: Part[] = [
    { // Gastrointestinal
      label: 'Gastrointestinal',
      sections: [
        {
          label: 'Gastric Function',
          questions: [
            {
              prompt: 'Indigestion, food repeats on you after you eat',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Excessive burping, belching and/or bloating following meals',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Stomach spasms and cramping during or after eating',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'A sensation that food just sits in your stomach creating uncomfortable fullness, pressure and bloating during or after a meal',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Bad taste in your mouth',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Small amounts of food fill you up immediately',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Skip meals or eat erratically because you have no appetite',
              type: 'freq',
              key: '6'
            }
          ]
        },
        {
          label: 'GI Inflammation',
          questions: [
          {
            prompt: 'Strong emotions, or the thought or smell of food aggravates your stomach or makes it hurt',
            type: 'freq',
            key: '0'
          },
          {
            prompt: 'Excessive burping, belching and/or bloating following meals Feel hungry an hour or two after eating a good-sized meal ',
            type: 'freq',
            key: '1'
          },
          {
            prompt: 'Stomach pain, burning and/or aching over a period of 1-4 hours after eating ',
            type: 'freq',
            key: '2'
          },
          {
            prompt: 'Stomach pain, burning and/or aching relieved by eating food; drinking carbonated beverages, cream or milk; or taking antacids',
            type: 'freq',
            key: '3'
          },
          {
            prompt: 'Burning sensation in the lower part of your chest, especially when lying down or bending forward',
            type: 'freq',
            key: '4'
          },
          {
            prompt: 'Digestive problems that subside with rest and relaxation',
            type: 'yn',
            key: '5'
          },
          {
            prompt: 'Eating spicy and fatty (fried) foods, chocolate, coffee, alcohol, citrus or hot peppers causes your stomach to burn or ache',
            type: 'freq',
            key: '6'
          },
          {
            prompt: 'Feel a sense of nausea when you eat',
            type: 'freq',
            key: '7'
          },
          {
            prompt: 'Difficulty or pain when swallowing food or beverage',
            type: 'freq',
            key: '8'
          }
          ]
        },
        {
          label: 'Small Intestine & Pancreas',
          questions: [
            {
              prompt: 'When massaging under your rib cage on your left side, there is pain, tenderness or soreness',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Indigestion, fullness or tension in your abdomen is delayed, occurring 2-4 hours after eating a meal',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Lower abdominal discomfort is relieved with the passage of gas or with a bowel movement',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Specific foods/beverages aggravate indigestion',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'The consistency or form of your stool changes (e.g., from narrow to loose) within the course of a day',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Stool odor is embarrassing',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Undigested food in your stool',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Three or more large bowel movements daily',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Diarrhea (frequent loose, watery stool)',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Bowel movement shortly after eating (within 1 hour)',
              type: 'freq',
              key: '9'
            }
          ]
        },
        {
          label: 'Colon',
          questions: [
            {
              prompt: 'Discomfort, pain or cramps in your colon (lower abdominal area)',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Emotional stress and/or eating raw fruits and vegetables causes abdominal bloating, pain, cramps or gas',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Generally constipated (or straining during bowel movements)',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Stool is small, hard and dry',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Pass mucus in your stool',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Alternate between constipation and diarrhea',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Rectal pain, itching or cramping',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'No urge to have a bowel movement',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'An almost continual need to have a bowel movement',
              type: 'yn',
              key: '8'
            }
          ]
        }
      ]
    },
    { // Liver_GB
      label: 'Liver Gallbladder',
      sections: [
        { label: 'Hepatobiliary Function',
          questions: [
            {
              prompt: 'When massaging under your rib cage on your right side, there is pain, tenderness or soreness ',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Abdominal pain worsens with deep breathing',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Pain at night that may move to your back or right shoulder',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Bitter fluid repeats after eating',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Feel abdominal discomfort or nausea when eating rich, fatty or fried foods',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Throbbing temples and/or dull pain in forehead associated with overeating',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Unexplained itchy skin that’s worse at night',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Stool color alternates from clay colored to normal brown',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'General feeling of poor health',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Aching muscles not due to exercise',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Retain fluid and feel swollen around the abdominal area',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Reddened skin, especially palms',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Very strong body odor',
              type: 'freq',
              key: '12'
            },
            {
              prompt: 'Are you embarrassed by your breath?',
              type: 'freq',
              key: '13'
            },
            {
              prompt: 'Bruise easily',
              type: 'yn',
              key: '14'
            },
            {
              prompt: 'Yellowish cast to eyes',
              type: 'yn',
              key: '15'
            }
          ]
        }
      ]
    },
    { // Endocrine
      label: 'Endocrine',
      sections: [
        { label: 'Thyroid',
          questions: [
            {
              prompt: 'Feel cold or chilled—hands, feet or all over—for no apparent reason',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Your upper eyelids look swollen',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Muscles are weak, cramp and/or tremble',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Are you forgetful?',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Do you feel like your heart beats slowly?',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Reaction time seems slowed down',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'In general, are you disinterested in sex because your desire is low?',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Feel slow-moving, sluggish',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Constipation',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Dryness, discoloration of skin and/or hair',
              type: 'yn',
              key: '9'
            },
            {
              prompt: 'Have you noticed recently that your voice is deepening?',
              type: 'yn',
              key: '10'
            },
            {
              prompt: 'Thick, brittle nails',
              type: 'yn',
              key: '11'
            },
            {
              prompt: 'Weight gain for no apparent reason',
              type: 'yn',
              key: '12'
            },
            {
              prompt: 'Outer third of your eyebrow is thinning or disappearing',
              type: 'yn',
              key: '13'
            },
            {
              prompt: 'Swelling of the neck',
              type: 'yn',
              key: '14'
            }
          ]
        },
        { label: 'Adrenal',
          questions: [
            {
              prompt: 'Lingering mild fatigue after exertion or stress',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Do you find that you get tired and exhaust easily?',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Craving for salty foods',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Sensitive to minor changes in weather and surroundings',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Dizzy when rising or standing up from a kneeling position',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Dark bluish or black circles under your eyes',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Have bouts of nausea with or without vomiting',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Catch colds or infections easily',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'Wounds heal slowly',
              type: 'yn',
              key: '8'
            },
            {
              prompt: 'Your body or parts of your body feel tender, sore, sensitive to the touch, hot and/or painful ',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Feel puffy and swollen all over your body',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Skin is gradually tanning without exposure to sun or the ingestion of high levels of carotene-rich foods (e.g., daily carrot juice intake) or supplements',
              type: 'yn',
              key: '11'
            }
          ]
        }
      ]
    },
    { // Glucose Regulation
      label: 'Glucose Regulation',
      sections: [
        { label: 'Dysglycemia–L',
          message: 'When you miss meals or go without food for extended periods of time, do you experience any of the following symptoms?',
          questions: [
            {
              prompt: 'A sense of weakness',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'A sudden sense of anxiety when you get hungry',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Tingling sensation in your hands',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'A sensation of your heart beating too quickly or forcefully',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Shaky, jittery, hands trembling',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Sudden profuse sweating and/or your skin feels clammy',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Nightmares possibly associated with going to bed on an empty stomach',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Wake up at night feeling restless',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Agitation, easily upset, nervous',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Poor memory, forgetful',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Confused or disoriented',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Dizzy, faint',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Cold or numb',
              type: 'freq',
              key: '12'
            },
            {
              prompt: 'Mild headaches or head pounding',
              type: 'freq',
              key: '13'
            },
            {
              prompt: 'Blurred vision or double vision',
              type: 'freq',
              key: '14'
            },
            {
              prompt: 'Feel clumsy and uncoordinated',
              type: 'freq',
              key: '15'
            }
          ]
        },
        { label: ' Dysglycemia–E',
          questions: [
            {
              prompt: 'Frequent urination during the day and night',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Unusual thirst—feeling like you can’t drink enough water',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Unusual hunger—eating all the time',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Vision blurs',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Feel itchy all over',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Tingling or numbness in your feet',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Sense of drowsiness, lethargy during the day not associated with missing meals or not sleeping',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Eating starchy foods, even if they are healthy and unprocessed (like rice, corn, beans, whole wheat or oats), causes you to gain weight or prevents you from losing weight',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'Sores heal slowly',
              type: 'yn',
              key: '8'
            },
            {
              prompt: 'Loss of hair on your legs',
              type: 'yn',
              key: '9'
            }
          ]
        }

      ],
    },
    { // Cardiovascular
      label: 'Cardiovascular',
      sections: [
        { label: 'Heart',
          questions: [
            {
              prompt: 'Feel jittery',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'First effort of the day causes pain, pressure, tightness or heaviness around the chest',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Exhaustion with minor exertion',
              type: 'freq',
              key: '2'
            },
            {
              prompt: ' Heavy sweating (no exertion, no hot flashes)',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Difficulty catching breath, especially during exercise',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Heart pounding, sensation of heart beating too quickly, too slowly or irregularly',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Swelling in feet, ankles and/or legs comes and goes for no apparent reason',
              type: 'freq',
              key: '6'
            }
          ]
        },
        { label: 'Circulation',
          questions: [
            {
              prompt: ' Muscle pain at rest',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Cramp-like pains in your ankles, calves or legs',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Numbness, tingling and prickling sensation in hands and feet',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Cold feet and/or toes appear blue',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Brief moments of hearing loss',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Nausea comes and goes quickly (unrelated to eating) ',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Feel worse standing: legs get heavy and fatigued',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Leg discomfort or fatigue relieved by elevating legs',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Fingers and toes get numb in cold weather even when protected',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Notice changes in your ability to feel pain or differentiate between sensations of hot or cold',
              type: 'yn',
              key: '9'
            },
            {
              prompt: 'Body hair (on arms, hands, fingers, legs and toes) is thinning or has disappeared',
              type: 'yn',
              key: '10'
            },
            {
              prompt: 'Do you notice a decline in your ability to make decisions, concentrate, focus attention or follow directions?',
              type: 'yn',
              key: '11'
            }
          ]
        }
      ]
    },
    { // Mood
      label: 'Mood',
      sections: [
        { label: 'Depression',
          questions: [
            {
              prompt: 'Family, friends, work, hobbies or activities you hold dear are no longer of interest ',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Do you cry?',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Does life look entirely hopeless?',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Would you describe yourself as feeling miserable and sad, unhappy or blue?',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Do you find it hard to make the best of difficult situations?',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Sleep problems—too much or too little sleep',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Changes in your appetite and weight',
              type: 'yn',
              key: '6'
            },
            {
              prompt: 'Lately you’ve noticed an inability to think clearly or concentrate',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'Difficulty making decisions and/or clarifying and achieving your goals',
              type: 'yn',
              key: '8'
            },
          ]
        },
        { label: 'Anxiety',
          questions: [
            {
              prompt: 'Does worrying get you down?',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Does every little thing get on your nerves and wear you out?',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Would you consider yourself a nervous person?',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Do you feel easily agitated?',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Do you shake and tremble?',
              type: 'freq',
              key: '4'
            },
            {
              prompt: "Are you keyed' up' and jittery?",
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Do you tremble or feel weak when someone shouts at you?',
              type: 'freq',
              key: '6'
            },
            {
              prompt: ' Do you become scared at sudden movements or noises at night?',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Do you find yourself sighing a lot?',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Are you awakened out of your sleep by frightening dreams?',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Do frightening thoughts keep coming back in your mind?',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Do you become suddenly scared for no reason?',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Do you break out in a cold sweat?',
              type: 'freq',
              key: '12'
            },
            {
              prompt: '“Butterflies in your stomach,” nausea and/or diarrhea',
              type: 'freq',
              key: '13'
            }
          ]
        },
        { label: 'Anger',
          questions: [
            {
              prompt: 'Do you feel pent up and ready to explode?',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Are you prone to noisy and emotional outbursts?',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Do you do things on impulse?',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Are you easily upset or irritated?',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Do you go to pieces if you don’t control yourself?',
              type: 'freq',
              key: '4'
            },
            {
              prompt: ' Do little annoyances get on your nerves and make you angry',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Does it make you angry to have anyone tell you what to do?',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Do you flare up in anger if you can’t have what you want right away?',
              type: 'freq',
              key: '7'
            }
          ]
        }
      ]
    },
    { // Immune
      label: 'Immune',
      sections: [
        { label: 'Eyes, Ears, Nose, Throat & Lungs',
          questions: [
            {
              prompt: 'Eyes water or tear',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Mucus discharge from the eyes',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Ears ache, itch, feel congested or sore',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Discharge from ears',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Is your nose continually congested?',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Are you prone to loud snoring?',
              type: 'yn',
              key: '5'
            },
            {
              prompt: 'Does your nose run?',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Nosebleeds',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'Hoarse voice',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Do you have to clear your throat?',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Do you feel a choking lump in your throat?',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Do you suffer from severe colds?',
              type: 'yn',
              key: '11'
            },
            {
              prompt: 'Do frequent colds keep you miserable all winter?',
              type: 'yn',
              key: '12'
            },
            {
              prompt: 'Flu symptoms last longer than 5 days',
              type: 'yn',
              key: '13'
            },
            {
              prompt: 'Do infections settle in your lungs?',
              type: 'yn',
              key: '14'
            },
            {
              prompt: 'Chest discomfort or pain',
              type: 'freq',
              key: '15'
            },
            {
              prompt: 'Do you experience sudden breathing difficulties?',
              type: 'freq',
              key: '16'
            },
            {
              prompt: 'Do you struggle with shortness of breath?',
              type: 'freq',
              key: '17'
            },
            {
              prompt: 'Difficulty exhaling (breathing out)',
              type: 'freq',
              key: '18'
            },
            {
              prompt: 'Breathlessness followed by coughing during exertion, no matter how slight',
              type: 'freq',
              key: '19'
            },
            {
              prompt: 'Inability to breathe comfortably while lying down',
              type: 'freq',
              key: '20'
            },
            {
              prompt: 'Do you cough up lots of phlegm?',
              type: 'freq',
              key: '21'
            },
            {
              prompt: 'Can you hear noisy rattling sounds when breathing in and out?',
              type: 'freq',
              key: '22'
            },
            {
              prompt: 'Are you troubled with coughing?',
              type: 'freq',
              key: '23'
            },
            {
              prompt: 'Do you wheeze?',
              type: 'freq',
              key: '24'
            },
            {
              prompt: 'Do you have severe soaking sweats at night?',
              type: 'freq',
              key: '25'
            },
            {
              prompt: 'Do your lips and/or nails have a bluish hue?',
              type: 'freq',
              key: '26'
            },
            {
              prompt: 'Are you sleepy during the day?',
              type: 'freq',
              key: '27'
            },
            {
              prompt: 'Do you have difficulty concentrating? ',
              type: 'freq',
              key: '28'
            },
            {
              prompt: 'Eyes, ears, nose, throat and lung symptoms seem associated with specific foods like dairy or wheat products',
              type: 'yn',
              key: '29'
            },
            {
              prompt: ' Eyes, ears, nose, throat and lung symptoms are associated with seasonal changes',
              type: 'yn',
              key: '30'
            }
          ]
        }
      ]
    },
    { //  Urological
      label: 'Urological',
      sections: [
        { label: 'Kidney & Bladder',
          questions: [
            {
              prompt: 'Involuntary loss of urine when you cough, lift something or strain during an activity',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Mild lower back ache or pain',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Abdominal achiness or pain',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Pain or burning when urinating',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Rarely feel the urge to urinate',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Feel the need to urinate less than every two hours during the day or night',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Strong smelling urine',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Back or leg pains are associated with dripping after urination',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Sore or painful genitals',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Urine is a rose color',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Sudden urge to void causes involuntary loss of urine',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Generalized sense of water retention throughout your body',
              type: 'freq',
              key: '11'
            }
          ]
        }
      ]
    },
    { // Musculoskeletal
      label: 'Musculoskeletal',
      sections: [
        { label: 'Bone Integrity',
          questions: [
            {
              prompt: 'Bones throughout your entire body ache, feel tender or sore',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Localized bone pain',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Hands, feet or throat get tight, spasm or feel numb',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Difficulty sitting straight',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Upper back pain',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Lower back pain',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Pain when sitting down or walking',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Find yourself limping or favoring one leg',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Shins hurt during or after exercise',
              type: 'freq',
              key: '8'
            }
          ]
        },
        { label: ' Connective Tissue',
          questions: [
            {
              prompt: 'Are you stiff in the morning when you wake up?',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Difficulty bending down and picking up clothing or anything from the floor',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Joint swelling, pain or stiffness involving one or more areas (fingers, hands, wrists, elbows, shoulders, toes, arches, feet, ankles, knees or ankles',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Joints hurt when moving or when carrying weight',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'A routine exercise program, like daily walking, causes your knees to swell or hurt',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Difficulty opening jars that were previously easy to open',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Discomfort, numbness, prickling or tingling sensation, or pain in neck, shoulder or arm',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Intermittent pain or ache on one side of head spreading to cheek, temple, lower jaw, ear, neck and shoulder',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Difficulty chewing food or opening mouth',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Difficulty standing up from a sitting position',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Shooting, aching, tingling pain down the back of leg ',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Is it difficult to reach up and get a 5-pound object like a bag of flour from just above your head?',
              type: 'yn',
              key: '11'
            },
            {
              prompt: 'Injure, strain or sprain easily',
              type: 'yn',
              key: '12'
            }
          ]
        },
        { label: 'Muscle & Nerves',
          questions: [
            {
              prompt: 'Muscles stiff, sore, tense and/or achy',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Burning, throbbing, shooting or stabbing muscle pain',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Muscle cramps or spasms (involuntary or after exertion/exercise)',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Is muscle pain or stiffness greater in the morning than other times of the day?',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Specific points on body feel sore when pressed',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Feel unrefreshed upon awakening',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Headaches',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Pain at the sides of your head or in your face especially when awakening',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Your jaw clicks or pops',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Muscle twitch or tremor—eyelids, thumb, calf muscle',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Irresistible urge to move legs',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Legs move during sleep',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Unpleasant crawling sensation inside calves when lying down',
              type: 'freq',
              key: '12'
            },
            {
              prompt: 'Hand and wrist numbness or pain (e.g., interferes with writing or with buttoning or unbuttoning your clothes)',
              type: 'freq',
              key: '13'
            },
            {
              prompt: 'Feeling of “pins and needles” in your thumb and first three fingers',
              type: 'freq',
              key: '14'
            },
            {
              prompt: 'Pain in forearm and sometimes in shoulde',
              type: 'freq',
              key: '15'
            },
          ]
        }
      ]
    },
    { // CNS & Brain
      label: 'CNS & Brain',
      sections: [
        { label: ' Central Nervous System',
          questions: [
            {
              prompt: 'Head feels heavy',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Dizziness',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Difficulty bending over, standing up from sitting, rolling over in bed and/or turning your head from side to side',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Your hands tremble, ever so slightly, for no apparent reason',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'You feel like you’re wearing heavy weights on your feet when walking',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Bump into things, trip, stumble and feel clumsy',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Difficulty breathing',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Difficulty swallowing',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'People tell you to speak up because they have trouble hearing you',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Speaking and forming words does not feel automatic',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Need 10-12 hours of sleep to feel rested',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Lack strength (your grip is weak, holding your head or picking your arms up takes effort)',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Hands get tired when you write and your handwriting is less legible and smaller than it used to be',
              type: 'yn',
              key: '12'
            },
            {
              prompt: 'Muscles in arms and legs seem softer and smalle',
              type: 'yn',
              key: '13'
            },
            {
              prompt: 'Is your eyesight, sense of smell and taste or ability to hear not as sharp as it used to be?',
              type: 'yn',
              key: '14'
            },
            {
              prompt: 'Do you find yourself moving slower than you used to?',
              type: 'yn',
              key: '15'
            }
          ]
        },
        { label: 'Cognition',
          questions: [
            {
              prompt: 'Difficulty absorbing new information',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Tend to forget things',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Trouble thinking or concentrating',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Easily distracted',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Do you have a tendency to become frustrated quickly?',
              type: 'freq',
              key: '4'
            },
            {
              prompt: ' Inability to sit still for any length of time, even at mealtime',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Finishing tasks is easier said than done',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Do you have more trouble solving problems or managing your time than usual?',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Low tolerance for stress and otherwise ordinary problems',
              type: 'freq',
              key: '8'
            },
          ]
        }
      ]
    },
    { //Part 11 Men Only
      label: 'Male',
      sections: [
        { label: 'Prostate Health',
          questions: [
            {
              prompt: 'Sensation of not emptying your bladder completely',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Need to urinate less than 2 hours after you have finished urinating',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Find yourself needing to stop and start again several times while urinating',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Find it difficult to postpone urination',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Have a weak urinary stream',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Need to push or strain to begin urinating',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Dripping after urination',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Urge to urinate several times a night',
              type: 'freq',
              key: '7'
            }
          ]
        }
      ]
    },
    { //Part 12 Women Only
      label: 'Female',
      subtitle: '(Menopausal women should skip to Sections E and F)',
      sections: [
        { label: 'Premenstrual Balance',
          message: 'Do you persistently experience any of these symptoms within three days to two weeks prior to menstruation?',
          questions: [
            {
              prompt: 'Anxious, irritable or restless',
              type: 'yn',
              key: '0'
            },
            {
              prompt: 'Numbness, tingling in hands and feet',
              type: 'yn',
              key: '1'
            },
            {
              prompt: 'Easy to anger, resentful',
              type: 'yn',
              key: '2'
            },
            {
              prompt: 'Aggressive or hostile toward family/friends',
              type: 'yn',
              key: '3'
            },
            {
              prompt: 'Abdominal bloating, feeling swollen (e.g., feet)',
              type: 'yn',
              key: '4'
            },
            {
              prompt: 'Temporary weight gain',
              type: 'yn',
              key: '5'
            },
            {
              prompt: 'Breast tenderness, swelling',
              type: 'yn',
              key: '6'
            },
            {
              prompt: 'Appearance of breast lumps',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'Discharge from nipples',
              type: 'yn',
              key: '8'
            },
            {
              prompt: 'Nausea and/or vomiting',
              type: 'yn',
              key: '9'
            },
            {
              prompt: 'Diarrhea or constipation',
              type: 'yn',
              key: '10'
            },
            {
              prompt: 'Aches and pains (back, joints, etc.)',
              type: 'yn',
              key: '11'
            },
            {
              prompt: 'Craving for sweets',
              type: 'yn',
              key: '12'
            },
            {
              prompt: 'Increased appetite or binge eating',
              type: 'yn',
              key: '13'
            },
            {
              prompt: 'Headaches',
              type: 'yn',
              key: '14'
            },
            {
              prompt: 'Being easily overwhelmed, shaky or clumsy',
              type: 'yn',
              key: '15'
            },
            {
              prompt: 'Heart pounding',
              type: 'yn',
              key: '16'
            },
            {
              prompt: 'Dizziness or fainting',
              type: 'yn',
              key: '17'
            },
            {
              prompt: 'Confused and forgetful to the point that work suffers',
              type: 'yn',
              key: '18'
            },
            {
              prompt: 'Overwhelmed with feelings of sadness and worthlessness',
              type: 'yn',
              key: '19'
            },
            {
              prompt: 'Difficulty sleeping or falling asleep',
              type: 'yn',
              key: '20'
            },
            {
              prompt: 'Engaging in self-destructive behavior',
              type: 'yn',
              key: '21'
            },
          ]
        },
        { label: 'Menstruation',
          message: 'Do you experience any of these symptoms during your period?',
          questions: [
            {
              prompt: 'Cramping in lower abdomen or pelvic area',
              type: 'yn',
              key: '0'
            },
            {
              prompt: 'Lower abdominal pain is sharp and/or dull or intermittent',
              type: 'yn',
              key: '1'
            },
            {
              prompt: 'Bloating and sense of abdominal fullness',
              type: 'yn',
              key: '2'
            },
            {
              prompt: 'Diarrhea or constipation',
              type: 'yn',
              key: '3'
            },
            {
              prompt: 'Nausea and/or vomiting',
              type: 'yn',
              key: '4'
            },
            {
              prompt: 'Low back and/or legs ache',
              type: 'yn',
              key: '5'
            },
            {
              prompt: 'Headaches',
              type: 'yn',
              key: '6'
            },
            {
              prompt: 'Unusual fatigue (take naps) resulting in missed work',
              type: 'yn',
              key: '7'
            },
            {
              prompt: 'Painful and/or swollen breasts',
              type: 'yn',
              key: '8'
            },
            {
              prompt: 'Scanty blood flow',
              type: 'yn',
              key: '9'
            }
          ]
        },
        { label: 'Reproductive Tissue Inflammation',
          questions: [
            {
              prompt: 'Painful or difficult sexual intercourse',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Low abdominal, back and vaginal pain throughout the month',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Pelvic pressure or pain while sitting down or standing up, relieved by lying down',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Vaginal bleeding other than during your period',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Painful bowel movements',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Difficult (straining) urination',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Abnormal vaginal discharge',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Offensive vaginal discharge',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Vaginal itching or burning with or without intercourse',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Pain during periods is getting progressively worse',
              type: 'yn',
              key: '9'
            },
            {
              prompt: 'Profuse or prolonged menstrual bleeding',
              type: 'yn',
              key: '10'
            },
            {
              prompt: 'Unable to get pregnant',
              type: 'yn',
              key: '11'
            },
          ]
        },
        { label: 'Hormone Balance',
          questions: [
            {
              prompt: 'Absence of periods for six months or longer',
              type: 'yn',
              key: '0'
            },
            {
              prompt: 'Periods occur irregularly (e.g., 3 to 6 times a year)',
              type: 'yn',
              key: '1'
            },
            {
              prompt: 'Profuse heavy bleeding during periods',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Menstrual blood contains clots and tissue',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Bleeding between periods can occur anytime',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Periods occur greater than every 35 days',
              type: 'yn',
              key: '5'
            },
            {
              prompt: 'Intense upper stomach pain, lasting several hours at the time you ovulate (approximately day 14 of your cycle',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Bleeding occurs at ovulation (approximately day 14 of your cycle)',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Monthly abdominal pain without bleeding',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Abundant cervical mucus',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Acne and/or oily skin',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Overwhelming urges for sexual intercourse',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Aggressive feelings',
              type: 'freq',
              key: '12'
            },
            {
              prompt: 'Increased growth of dark facial and/or body hair',
              type: 'yn',
              key: '13'
            },
            {
              prompt: 'Poor sense of smell',
              type: 'yn',
              key: '14'
            },
            {
              prompt: 'Voice is becoming deeper',
              type: 'yn',
              key: '15'
            },
            {
              prompt: 'Breasts seem to be getting smaller',
              type: 'yn',
              key: '16'
            },
            {
              prompt: 'Receding hairline',
              type: 'yn',
              key: '17'
            },
          ]
        },
        { label: 'Ovarian Function',
          questions: [
            {
              prompt: 'Vaginal discharge',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Vaginal secretions are watery and thin',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Vaginal dryness',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Sexual intercourse is uncomfortable',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Interest in having sex is low',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Engorged breasts',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Breast tenderness, soreness',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Difficulty with orgasm',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Vaginal bleeding after sexual intercourse',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Do you skip periods?',
              type: 'yn',
              key: '9'
            },
            {
              prompt: 'The length (number of days) of your period varies month to month, with the number of days of bleeding getting fewer',
              type: 'yn',
              key: '10'
            },
          ]
        },
        { label: 'Estrogen/Progesterone Decline',
          questions: [
            {
              prompt: 'Sense of well-being fluctuates throughout the day for no apparent reason',
              type: 'freq',
              key: '0'
            },
            {
              prompt: 'Sudden hot flashes',
              type: 'freq',
              key: '1'
            },
            {
              prompt: 'Spontaneous sweating',
              type: 'freq',
              key: '2'
            },
            {
              prompt: 'Chills',
              type: 'freq',
              key: '3'
            },
            {
              prompt: 'Cold hands and feet',
              type: 'freq',
              key: '4'
            },
            {
              prompt: 'Heart beats rapidly or feels like it is fluttering',
              type: 'freq',
              key: '5'
            },
            {
              prompt: 'Numbness, tingling or prickling sensations',
              type: 'freq',
              key: '6'
            },
            {
              prompt: 'Dizziness',
              type: 'freq',
              key: '7'
            },
            {
              prompt: 'Mental fogginess, forgetful or distracted',
              type: 'freq',
              key: '8'
            },
            {
              prompt: 'Inability to concentrate',
              type: 'freq',
              key: '9'
            },
            {
              prompt: 'Depression, anxiety, nervousness and/or irritability',
              type: 'freq',
              key: '10'
            },
            {
              prompt: 'Difficulty sleeping',
              type: 'freq',
              key: '11'
            },
            {
              prompt: 'Conscious of new feelings of anger and frustration',
              type: 'freq',
              key: '12'
            },
            {
              prompt: 'Skin, hair, vagina and/or eyes feel dry',
              type: 'freq',
              key: '13'
            },
            {
              prompt: 'Stopped menstruating around six months ago, yet still experience some vaginal bleeding',
              type: 'yn',
              key: '14'
            },
          ]
        },
      ]
    }
  ];

  constructor() {
    this.parts = [];
    this.formData.forEach((part: Part) => this.setParts(part));
   }

  public getParts(): Part[] {
    return [ ...this.parts ];
  }

  private setParts(part: Part): void {
    this.parts.push(part as Part);
  }
};
