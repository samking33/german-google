const CONTACT_SUBMISSION_KEY = "aktas-contact-submission";
const CONTACT_SUBMISSION_TRACKED_KEY = "aktas-contact-submission-tracked";
const SUBMISSION_MAX_AGE_MS = 30 * 60 * 1000;

type ContactSubmissionMarker = {
  id: string;
  submittedAt: number;
};

function isBrowser() {
  return typeof window !== "undefined";
}

function readMarker(): ContactSubmissionMarker | null {
  if (!isBrowser()) {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(CONTACT_SUBMISSION_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<ContactSubmissionMarker>;

    if (typeof parsed.id !== "string" || typeof parsed.submittedAt !== "number") {
      window.sessionStorage.removeItem(CONTACT_SUBMISSION_KEY);
      return null;
    }

    if (Date.now() - parsed.submittedAt > SUBMISSION_MAX_AGE_MS) {
      clearContactSubmissionMarker();
      return null;
    }

    return {
      id: parsed.id,
      submittedAt: parsed.submittedAt,
    };
  } catch {
    window.sessionStorage.removeItem(CONTACT_SUBMISSION_KEY);
    return null;
  }
}

export function markContactSubmissionComplete() {
  if (!isBrowser()) {
    return null;
  }

  const marker = {
    id: `contact_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    submittedAt: Date.now(),
  };

  window.sessionStorage.setItem(CONTACT_SUBMISSION_KEY, JSON.stringify(marker));
  return marker;
}

export function getContactSubmissionMarker() {
  return readMarker();
}

export function clearContactSubmissionMarker() {
  if (!isBrowser()) {
    return;
  }

  window.sessionStorage.removeItem(CONTACT_SUBMISSION_KEY);
  window.sessionStorage.removeItem(CONTACT_SUBMISSION_TRACKED_KEY);
}

export function hasTrackedContactSubmission(submissionId: string) {
  if (!isBrowser()) {
    return false;
  }

  return window.sessionStorage.getItem(CONTACT_SUBMISSION_TRACKED_KEY) === submissionId;
}

export function markContactSubmissionTracked(submissionId: string) {
  if (!isBrowser()) {
    return;
  }

  window.sessionStorage.setItem(CONTACT_SUBMISSION_TRACKED_KEY, submissionId);
}
