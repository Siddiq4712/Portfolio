class StatsService {
  constructor() {
    this.hits = 0;
    this.endpoints = {};
    this.startTime = new Date();
  }

  recordRequest(path, method) {
    this.hits++;
    const key = `${method} ${path}`;
    this.endpoints[key] = (this.endpoints[key] || 0) + 1;
  }

  getStats() {
    return {
      totalRequests: this.hits,
      uptime: `${Math.floor((new Date() - this.startTime) / 1000)}s`,
      endpointBreakdown: this.endpoints,
      systemStatus: 'Healthy',
      architecture: 'Express/Node.js'
    };
  }
}

export const apiStats = new StatsService();