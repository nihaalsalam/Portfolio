import React from 'react';
import {
  ShoppingBag,
  Database,
  FileText,
  Search,
  Sparkles,
  Activity,
  Layers,
  Cpu,
  BarChart3,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const EcommerceMockup: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0d0d0d] p-5 sm:p-7 flex flex-col justify-between select-none font-sans text-xs">
      {/* Top App Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-zinc-100 text-sm">ArtisanCraft E-Commerce</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
            Django + MySQL
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Active Session</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 flex-1">
        {/* Metric 1 */}
        <div className="rounded-xl border border-white/5 bg-zinc-900/60 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-[10px] uppercase font-mono">Product Catalog</span>
            <Database className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white font-mono">148</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Handmade Artisan Items</div>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-emerald-400 w-3/4 rounded-full" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="rounded-xl border border-white/5 bg-zinc-900/60 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-[10px] uppercase font-mono">Cart & Wishlist</span>
            <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white font-mono">98.4%</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Checkout Completion Rate</div>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-blue-400 w-4/5 rounded-full" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="rounded-xl border border-white/5 bg-zinc-900/60 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-[10px] uppercase font-mono">Admin Analytics</span>
            <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white font-mono">Live</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">Orders & Report Generation</div>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-purple-400 w-5/6 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Interface Preview Rows */}
      <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-3 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>CRUD Modules & Database Relations</span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Session Auth & RBAC
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
          <div className="py-1 px-2 rounded-lg bg-zinc-800/80 border border-white/5 text-zinc-300">
            Products Model
          </div>
          <div className="py-1 px-2 rounded-lg bg-zinc-800/80 border border-white/5 text-zinc-300">
            Order Items
          </div>
          <div className="py-1 px-2 rounded-lg bg-zinc-800/80 border border-white/5 text-zinc-300">
            Cart Session
          </div>
          <div className="py-1 px-2 rounded-lg bg-zinc-800/80 border border-white/5 text-zinc-300">
            Export PDF/CSV
          </div>
        </div>
      </div>
    </div>
  );
};

export const RagMockup: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0b0f19] p-5 sm:p-7 flex flex-col justify-between select-none font-sans text-xs">
      {/* Top Pipeline Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold font-mono">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-zinc-100 text-sm">Smart RAG Document QA</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] border border-blue-500/20">
            FastAPI + FLAN-T5
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-blue-400 font-mono text-[10px]">
          <Search className="w-3 h-3" />
          <span>Vector Similarity Index</span>
        </div>
      </div>

      {/* RAG Workflow Visualizer */}
      <div className="my-3 space-y-2">
        <div className="p-3 rounded-xl border border-white/5 bg-zinc-900/60 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2 text-zinc-300">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Document.pdf (14 Pages)</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Chunked & Embedded
          </span>
        </div>

        {/* Live Question & Answer Dialogue */}
        <div className="p-3.5 rounded-xl border border-blue-500/20 bg-blue-950/20 space-y-2">
          <div className="flex items-center gap-2 text-zinc-300 font-medium">
            <span className="text-blue-400 font-mono">User Query:</span>
            <span>"What are the quarterly compliance findings in section 4?"</span>
          </div>
          <div className="text-zinc-400 text-[11px] pl-3 border-l-2 border-emerald-400 space-y-1">
            <p className="text-zinc-200">
              "Based on retrieved Chunks #12 & #13: Compliance standards were met across all metrics with a 99.2% conformance score."
            </p>
            <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground pt-1">
              <span>Cosine Similarity: 0.941</span>
              <span>Model: FLAN-T5 Transformer</span>
              <span className="text-emerald-400">Zero Hallucination</span>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Badges */}
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-1 border-t border-white/5">
        <span className="flex items-center gap-1 text-zinc-300">
          <Cpu className="w-3.5 h-3.5 text-blue-400" />
          Embeddings → Vector DB → Context Injection → Grounded Generation
        </span>
        <span className="text-blue-400 font-semibold">FastAPI Async</span>
      </div>
    </div>
  );
};

export const SkinLesionMockup: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#110e1a] p-5 sm:p-7 flex flex-col justify-between select-none font-sans text-xs">
      {/* Top Diagnostic Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold font-mono">
            <Activity className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-zinc-100 text-sm">CNN Dermatological Classifier</span>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-mono text-[10px] border border-purple-500/20">
            TensorFlow + OpenCV
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[10px]">
          <Layers className="w-3 h-3" />
          <span>Deep CNN Pipeline</span>
        </div>
      </div>

      {/* Image Processing & CNN Inspection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        {/* Preprocessing card */}
        <div className="rounded-xl border border-white/5 bg-zinc-900/60 p-3 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
            <span>OpenCV Preprocessing</span>
            <span className="text-purple-400">Step 1-3</span>
          </div>
          <div className="space-y-1.5 text-[11px] text-zinc-300">
            <div className="flex items-center justify-between">
              <span>Noise Filtering (Gaussian)</span>
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>Border Segmentation</span>
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>Adaptive Histogram Eq</span>
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Prediction Results */}
        <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-3 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
            <span>Model Prediction</span>
            <span className="text-emerald-400 font-semibold font-mono">Verified</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-white">
              <span>Primary Class</span>
              <span className="text-purple-300 font-mono">Benign Nevus</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Confidence Score</span>
              <span className="font-mono text-emerald-400 font-bold">96.8%</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full w-[96.8%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Model Specs */}
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-1 border-t border-white/5">
        <span className="flex items-center gap-1.5 text-zinc-300">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          Conv2D → BatchNorm → MaxPool → Dense Softmax
        </span>
        <span className="text-purple-300">Automated Risk Analysis</span>
      </div>
    </div>
  );
};

