'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { cn } from '@/lib/utils'

// ─── Zod schemas per step ─────────────────────────────────────────────────────

const step1Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
})

const step2Schema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  projectDescription: z.string().min(20, 'Please describe your project (min 20 characters)'),
})

const step3Schema = z.object({
  referralSource: z.string().min(1, 'Please tell us how you found us'),
  message: z.string().optional(),
})

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema)
type FormData = z.infer<typeof fullSchema>

const STEPS = ['About You', 'Your Project', 'Final Details']

const BUDGET_OPTIONS = [
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-5k', label: '$1,000 – $5,000' },
  { value: '5k-15k', label: '$5,000 – $15,000' },
  { value: '15k-50k', label: '$15,000 – $50,000' },
  { value: '50k-plus', label: '$50,000+' },
]

const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1–3 months' },
  { value: '3-6-months', label: '3–6 months' },
  { value: 'flexible', label: 'Flexible' },
]

const REFERRAL_OPTIONS = [
  'Google Search', 'Social Media', 'Referral / Word of Mouth',
  'Portfolio / Dribbble', 'LinkedIn', 'Other',
]

// ─── Shared input styles ──────────────────────────────────────────────────────

const inputClass = cn(
  'w-full px-4 py-3 rounded-xl text-sm font-body transition-all duration-200 outline-none',
  'dark:bg-dark-surface bg-light-surface',
  'dark:text-text-on-dark text-text-primary',
  'dark:border-dark-border border-light-border border',
  'focus:border-brand-orange dark:focus:border-brand-orange',
  'placeholder:dark:text-text-muted-dark placeholder:text-text-muted'
)

export default function MultiStepContactForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onBlur',
  })

  const stepSchemas = [step1Schema, step2Schema, step3Schema]
  const stepFields: (keyof FormData)[][] = [
    ['name', 'email', 'company', 'phone'],
    ['serviceType', 'budget', 'timeline', 'projectDescription'],
    ['referralSource', 'message'],
  ]

  const next = async () => {
    const valid = await trigger(stepFields[step] as (keyof FormData)[])
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // Simulate API call — replace with your form handler or Next.js Server Action
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'color-mix(in srgb, var(--color-brand-orange) 15%, transparent)' }}
        >
          <Check size={28} style={{ color: 'var(--color-brand-orange)' }} />
        </div>
        <h3 className="font-display font-700 text-2xl dark:text-white text-text-primary mb-3">
          Message Received!
        </h3>
        <p className="dark:text-text-muted-dark text-text-secondary font-body text-sm max-w-sm mx-auto">
          We&apos;ll review your brief and get back to you within 24 hours. Keep an eye on your inbox.
        </p>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-10">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-700 transition-all duration-300',
                  i < step
                    ? 'text-white'
                    : i === step
                    ? 'text-white'
                    : 'dark:bg-dark-surface bg-light-surface dark:text-text-muted-dark text-text-muted'
                )}
                style={
                  i <= step
                    ? { background: i < step ? 'var(--color-brand-blue)' : 'var(--color-brand-orange)' }
                    : undefined
                }
              >
                {i < step ? <Check size={12} /> : i + 1}
              </div>
              <span
                className={cn(
                  'text-xs font-mono hidden sm:block',
                  i === step
                    ? 'text-brand-orange'
                    : i < step
                    ? 'dark:text-text-on-dark/60 text-text-muted'
                    : 'dark:text-text-muted-dark text-text-muted'
                )}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  'h-px flex-1 transition-all duration-500',
                  i < step ? 'bg-brand-blue' : 'dark:bg-dark-border bg-light-border'
                )}
                style={{ minWidth: '1.5rem' }}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1 */}
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-2">
                    Full Name *
                  </label>
                  <input {...register('name')} placeholder="Your name" className={inputClass} />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-body">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-2">
                    Email Address *
                  </label>
                  <input {...register('email')} type="email" placeholder="you@company.com" className={inputClass} />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 font-body">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-2">
                    Company
                  </label>
                  <input {...register('company')} placeholder="Your company (optional)" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-2">
                    Phone
                  </label>
                  <input {...register('phone')} type="tel" placeholder="+254 700 000 000" className={inputClass} />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {/* Service type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-3">
                  Service Needed *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES.map((s) => {
                    const val = watch('serviceType')
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setValue('serviceType', s.category, { shouldValidate: true })}
                        className={cn(
                          'px-3 py-2.5 rounded-xl text-xs font-display font-600 border transition-all duration-200 text-left',
                          val === s.category
                            ? 'border-brand-orange text-white'
                            : 'dark:bg-dark-surface bg-light-surface dark:border-dark-border border-light-border dark:text-text-muted-dark text-text-secondary hover:border-brand-orange/40'
                        )}
                        style={val === s.category ? { background: 'var(--color-brand-orange)' } : undefined}
                      >
                        {s.icon} {s.title}
                      </button>
                    )
                  })}
                </div>
                {errors.serviceType && (
                  <p className="mt-2 text-xs text-red-400 font-body">{errors.serviceType.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-3">
                  Budget Range *
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((opt) => {
                    const val = watch('budget')
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setValue('budget', opt.value, { shouldValidate: true })}
                        className={cn(
                          'px-3 py-2 rounded-xl text-xs font-display font-600 border transition-all duration-200',
                          val === opt.value
                            ? 'text-white border-brand-orange'
                            : 'dark:bg-dark-surface bg-light-surface dark:border-dark-border border-light-border dark:text-text-muted-dark text-text-secondary hover:border-brand-orange/40'
                        )}
                        style={val === opt.value ? { background: 'var(--color-brand-orange)' } : undefined}
                      >
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
                {errors.budget && (
                  <p className="mt-2 text-xs text-red-400 font-body">{errors.budget.message}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-3">
                  Timeline *
                </label>
                <div className="flex flex-wrap gap-2">
                  {TIMELINE_OPTIONS.map((opt) => {
                    const val = watch('timeline')
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setValue('timeline', opt.value, { shouldValidate: true })}
                        className={cn(
                          'px-3 py-2 rounded-xl text-xs font-display font-600 border transition-all duration-200',
                          val === opt.value
                            ? 'text-white border-brand-blue'
                            : 'dark:bg-dark-surface bg-light-surface dark:border-dark-border border-light-border dark:text-text-muted-dark text-text-secondary hover:border-brand-blue/40'
                        )}
                        style={val === opt.value ? { background: 'var(--color-brand-blue)' } : undefined}
                      >
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
                {errors.timeline && (
                  <p className="mt-2 text-xs text-red-400 font-body">{errors.timeline.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-2">
                  Project Description *
                </label>
                <textarea
                  {...register('projectDescription')}
                  rows={4}
                  placeholder="Tell us about your project — what do you need, what's the context, what does success look like?"
                  className={cn(inputClass, 'resize-none')}
                />
                {errors.projectDescription && (
                  <p className="mt-1.5 text-xs text-red-400 font-body">{errors.projectDescription.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-3">
                  How did you find us? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {REFERRAL_OPTIONS.map((opt) => {
                    const val = watch('referralSource')
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setValue('referralSource', opt, { shouldValidate: true })}
                        className={cn(
                          'px-3 py-2 rounded-xl text-xs font-display font-600 border transition-all duration-200',
                          val === opt
                            ? 'text-white border-brand-blue'
                            : 'dark:bg-dark-surface bg-light-surface dark:border-dark-border border-light-border dark:text-text-muted-dark text-text-secondary hover:border-brand-blue/40'
                        )}
                        style={val === opt ? { background: 'var(--color-brand-blue)' } : undefined}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {errors.referralSource && (
                  <p className="mt-2 text-xs text-red-400 font-body">{errors.referralSource.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-2">
                  Anything else?
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Links, references, inspirations, or anything else we should know."
                  className={cn(inputClass, 'resize-none')}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t dark:border-dark-border border-light-border">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            disabled={step === 0}
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-display font-600 transition-all',
              step === 0
                ? 'opacity-30 cursor-not-allowed dark:text-text-muted-dark text-text-muted'
                : 'dark:text-text-on-dark text-text-primary dark:hover:bg-dark-card hover:bg-light-surface'
            )}
          >
            <ArrowLeft size={15} />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="btn-orange group"
            >
              Next Step
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-orange group"
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Brief
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
